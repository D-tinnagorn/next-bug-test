
export async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://api-uat.onelifegroupholding.com/product/public")

  const data = await res.json()

  return data.data 
}
