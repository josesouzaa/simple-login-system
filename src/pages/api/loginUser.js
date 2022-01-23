import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default async function loginUser(req, res) {
  const { email, password } = req.body

  if (emailRegex.test(email)) {
    const userAlreadyCadastred = await prisma.user.findFirst({
      where: { email: email }
    })

    if (!userAlreadyCadastred) {
      return res.status(200).send('Usuário não cadastrado')
    }

    if (userAlreadyCadastred.password === password) {
      return res
        .status(201)
        .json({ message: 'Login realizado', user: userAlreadyCadastred })
    } else {
      return res.status(200).send('Email ou senha inválidos')
    }
  }
}
