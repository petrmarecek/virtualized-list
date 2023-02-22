export const getData = count => {
  const data = []
  for (let i = 0; i < count; i++) {
    data.push(`ukol ${i}`)
  }

  return data
}
