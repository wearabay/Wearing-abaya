import type { CartItem } from "@/lib/cart";


export type OrderStatus =
  | "pending"
  | "paid"
  | "processing"
  | "shipped"
  | "completed"
  | "cancelled";


export type Order = {

  id: string;

  items: CartItem[];

  customer: {
    email: string;
    phone: string;
  };

  address: {
    firstName: string;
    lastName: string;
    street: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
  };

  delivery: string;

  payment: string;

  subtotal: number;

  status: OrderStatus;

  createdAt: string;

};


const ORDER_KEY = "wearing-abaya-orders";



export function createOrder(
  order: Order
) {

  if (
    typeof window === "undefined"
  ) {
    return null;
  }


  const orders = getOrders();


  orders.push(order);


  localStorage.setItem(
    ORDER_KEY,
    JSON.stringify(orders)
  );


  return order;

}




export function getOrders(): Order[] {

  if (
    typeof window === "undefined"
  ) {
    return [];
  }


  try {

    const data =
      localStorage.getItem(
        ORDER_KEY
      );


    return data
      ? JSON.parse(data)
      : [];


  } catch {

    return [];

  }

}




export function getOrderById(
  id: string
) {

  const orders =
    getOrders();


  return orders.find(
    (order) =>
      order.id === id
  );

}




export function updateOrderStatus(
  id: string,
  status: OrderStatus
) {

  if (
    typeof window === "undefined"
  ) {
    return;
  }


  const orders =
    getOrders();


  const updated =
    orders.map((order)=>{

      if(order.id === id){

        return {
          ...order,
          status,
        };

      }


      return order;

    });



  localStorage.setItem(
    ORDER_KEY,
    JSON.stringify(updated)
  );


}




export function clearOrders(){

  if(
    typeof window === "undefined"
  ){
    return;
  }


  localStorage.removeItem(
    ORDER_KEY
  );

}