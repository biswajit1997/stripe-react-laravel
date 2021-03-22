<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Stripe\PaymentIntent;
use Stripe\Stripe;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/create-payment-intent', function (Request $request) {
    // return $request->product['price'];
    // Set your secret key. Remember to switch to your live secret key in production.
    // See your keys here: https://dashboard.stripe.com/account/apikeys
    Stripe::setApiKey('sk_test_51IXAFNSBBGylYgmsWY1F0Cg0kxUE2faw73jvjGCGFOkF2rDUVnbL0G6F3Y1WiJgnmp7DHXrqOZUME1Xlfv6vIOFi00PXHIOd1A');
    
    $paymentIntent = PaymentIntent::create([
    'amount' => round($request->product['price']),
    'currency' => 'inr',
    'payment_method_types' =>$request->input('card'),
    'receipt_email' => 'jenny.rosen@example.com',
    ]);
    
    return response()->json($paymentIntent, 200);
    });
    