// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  res.json({
    name: 'John Doe',
    age: 18,
    cars: [
      {
        id: 0,
        name: 'BMW 325i'
      },
      {
        id: 0,
        name: 'Porsche 718'
      }
    ]
  })
}
