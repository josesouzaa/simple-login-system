import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

export default async function updateUser(req, res) {
  const { email, password } = req.body

  if (emailRegex.test(email)) {
    const userAlreadyCadastred = await prisma.user.findFirst({
      where: { email: email }
    })

    if (!userAlreadyCadastred) {
      return res.status(200).send('Usuário não cadastrado')
    }

    if (!passwordRegex.test(password)) {
      return res.status(200).send('Digite uma nova senha válida')
    }

    if (userAlreadyCadastred) {
      const updatedUser = await prisma.user.update({
        where: {
          uuid: userAlreadyCadastred.uuid
        },
        data: {
          password: password
        }
      })

      return res
        .status(201)
        .json({ message: 'Senha atualizada', user: updatedUser })
    } else {
      return res.status(200).send('Email inválido')
    }
  }
}
