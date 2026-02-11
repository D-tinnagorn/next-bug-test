
import { Product } from "@/app/types/product"

// export async function getProducts(): Promise<Product[]> {
//   const res = await fetch("https://api-uat.onelifegroupholding.com/product/public")
  
//   const data = await res.json()
//   console.log(data)
//   return data
// }


export async function getProducts(): Promise<Product[]> {
  try 
  {
    const res = await fetch("https://api-uat.onelifegroupholding.com/product/public")
    if (!res.ok) 
    {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    const data = await res.json()
    console.log("data:", data)
    return data
    
  } catch (error) 
  {
    console.error("Failed to fetch products:", error);
    throw error;
  }
}