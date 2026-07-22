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



const ORDER_KEY =
  "wearing-abaya-orders";



export function createOrder(
  order: Order
) {

  if (
    typeof window === "undefined"
  ) return;


  const orders =
    getOrders();


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
): Order | undefined {


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
  ) return;


  const orders =
    getOrders();



  const updatedOrders =
    orders.map(
      (order) =>
        order.id === id
          ? {
              ...order,
              status,
            }
          : order
    );



  localStorage.setItem(
    ORDER_KEY,
    JSON.stringify(
      updatedOrders
    )
  );


  window.dispatchEvent(
    new Event("orders-updated")
  );


  return updatedOrders;

}