<template>
	<div class="max-w-7xl mx-auto w-full px-4 py-6 space-y-6">
		<div class="flex items-center justify-between gap-4">
			<h1 class="text-3xl font-bold">Cart</h1>
			<button v-if="items.length" class="btn btn-outline btn-sm" @click="clearCart">
				Clear Cart
			</button>
		</div>

		<div
			v-if="items.length === 0"
			class="rounded-xl border border-dashed border-base-300 p-8 text-center text-base-content/70"
		>
			Your cart is empty
		</div>

		<div v-else class="overflow-x-auto rounded-2xl border border-base-300 bg-base-100 shadow-sm">
			<table class="table">
				<thead>
					<tr>
						<th>Product</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Subtotal</th>
						<th class="text-center">Action</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in items" :key="item.id">
						<td>
							<div class="flex items-center gap-3">
								<img :src="item.image" :alt="item.title || item.name" class="h-14 w-14 rounded-lg object-cover" />
								<div>
									<div class="font-semibold">{{ item.title || item.name }}</div>
									<div class="text-sm text-base-content/60">Stock: {{ item.stock }}</div>
								</div>
							</div>
						</td>
						<td>${{ Number(item.price).toFixed(2) }}</td>
						<td>{{ item.quantity }}</td>
						<td>${{ (Number(item.price) * Number(item.quantity)).toFixed(2) }}</td>
						<td class="text-right">
							<button class="btn btn-error btn-sm" @click="removeFromCart(item.id)">Remove</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="flex justify-end">
			<div class="min-w-64 rounded-2xl border border-base-300 bg-base-100 px-6 py-4 shadow-sm">
				<div class="flex items-center justify-between gap-4 text-lg font-semibold">
					<span>Total</span>
					<span>${{ totalPrice.toFixed(2) }}</span>
				</div>
			</div>
		</div>

		<form
			v-if="items.length"
			class="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm space-y-4"
			@submit.prevent="handleCheckout"
		>
			<h2 class="text-2xl font-semibold">Checkout</h2>

			<div class="space-y-2">
				<label for="name" class="text-sm font-medium">Name</label>
				<input
					id="name"
					v-model="checkoutForm.name"
					type="text"
					class="input input-bordered w-full outline-none border"
					placeholder="Enter your full name"
				/>
			</div>

			<div class="space-y-2">
				<label for="address" class="text-sm font-medium">Address</label>
				<textarea
					id="address"
					v-model="checkoutForm.address"
					class="textarea textarea-bordered w-full outline-none border"
					rows="3"
					placeholder="Enter your address"
				></textarea>
			</div>

			<button type="submit" class="btn btn-primary" :disabled="!isFormValid">
				Place Order
			</button>
		</form>
	</div>
</template>

<script setup>
import { computed, ref } from "vue";
import { storeToRefs } from "pinia";
import { useCartStore } from "@/store/cart";

const cartStore = useCartStore();
const { items, totalPrice } = storeToRefs(cartStore);
const { removeFromCart, clearCart } = cartStore;

const checkoutForm = ref({
	name: "",
	address: "",
});

const isFormValid = computed(() => {
	const hasName = checkoutForm.value.name.trim().length > 0;
	const hasAddress = checkoutForm.value.address.trim().length > 0;

	return hasName && hasAddress;
});

const handleCheckout = () => {
	if (!isFormValid.value) {
		return;
	}

	clearCart();
	checkoutForm.value = {
		name: "",
		address: "",
	};
};
</script>