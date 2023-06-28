import { PrismaClient, Product } from '@prisma/client';

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body.title || !body.price || !body.description) {
    return {
      statusCode: 400,
      body: 'Missing name, price or description'
    }
  }
  if (body.title.trim().length === 0 || body.price < 0 || body.description.trim().length === 0) {
    return {
      statusCode: 400,
      body: 'Invalid name, price or description'
    }
  }


  //přidat další validace

  let product: Product;

  try {
    product = await prisma.product.create({
      data: body
    })

  } catch (e) {

    return {
      statusCode: 500,
      body: 'Error creating product, error: ' + e
    }
  }

  return product
})
