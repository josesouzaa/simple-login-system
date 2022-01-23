import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const nameRegex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

export default async function (req, res) {
  const { name, email, password } = req.body

  if (
    nameRegex.test(name) &&
    emailRegex.test(email) &&
    passwordRegex.test(password)
  ) {
    const emailExists = await prisma.user.findFirst({
      where: { email: email }
    })

    if (!emailExists) {
      const newUser = await prisma.user.create({
        data: {
          name: name,
          email: email,
          password: password
        }
      })

      return res.status(201).json({ message: 'Usuário criado!', user: newUser })
    } else {
      return res.status(200).send('Usuário já existe!')
    }
  } else {
    return res.status(200).send('Campos inválidos!')
  }
}
