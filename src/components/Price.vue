<template>
	<div style="padding-right: 0.5rem">
		<span class="price">$6</span>
		<span class="old-price">$20</span>
		<span class="discount">
			(70% off)
		</span>
	</div>
</template>

<style scoped>
.price {
	font-size: 2rem;
	color: rgb(var(--mdui-color-primary));
	font-weight: bold;
	padding-right: 0.5rem;
}

.old-price {
	font-size: 1rem;
	color: rgb(var(--mdui-color-primary));
	text-decoration: line-through;
}

.discount {
	font-size: 1rem;
	font-weight: bold;
	color: red;
}
</style>