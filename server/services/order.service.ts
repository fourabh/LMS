import { NextFunction,Response } from "express";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import OrderModel from "../models/orderModel";

// create new order
export const newOrder = CatchAsyncError(
  async (data: any, next: NextFunction,res:Response) => {
    const order = await OrderModel.create(data);
    return res.status(201).json({
        success: true,
        order,
      });
    //next(order)
  }
);
