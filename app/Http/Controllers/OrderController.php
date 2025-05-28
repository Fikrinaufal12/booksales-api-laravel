<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;

class OrderController extends Controller
{
    public function index()
    {
        return Order::with('customer')->get();
    }

    public function show($id)
    {
        $order = Order::with('customer')->findOrFail($id);

        if (auth()->user()->role !== 'admin' && $order->customer_id !== auth()->id()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        return $order;
    }

    public function store(Request $request)
    {
        $request->validate([
            'product' => 'required|string'
        ]);

        $order = Order::create([
            'product' => $request->product,
            'customer_id' => auth()->id()
        ]);

        return response()->json($order, 201);
    }

    public function update(Request $request, $id)
    {
        $order = Order::findOrFail($id);

        if ($order->customer_id !== auth()->id()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $order->update($request->only('product'));
        return $order;
    }

    public function destroy($id)
    {
        $order = Order::findOrFail($id);
        $order->delete();

        return response()->json(['message' => 'Order deleted']);
    }
}
