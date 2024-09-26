<script setup>
</script>

<template>
	<div class="dialog-content">
		<div class="label">地址</div>
		<mdui-text-field rows="1" value="中国浙江省杭州市西湖区紫荆花路余杭塘路866号"></mdui-text-field>
		<div class="label">手机号（用于接收物流信息）</div>
		<mdui-text-field rows="1" value="1XX-XXXX-XXXX"></mdui-text-field>
		<div class="label">订单备注</div>
		<mdui-text-field rows="1" value="请尽快发货"></mdui-text-field>
		<div class="label">支付方式</div>
		<mdui-radio-group value="alipay">
			<mdui-radio value="alipay">支付宝</mdui-radio>
			<mdui-radio value="wechat">微信</mdui-radio>
		</mdui-radio-group>
	</div>
</template>