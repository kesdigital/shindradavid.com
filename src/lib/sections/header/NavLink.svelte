<script lang="ts">
	export let href: string;
	export let name: string;
</script>

<a {href}>
	<span><slot name="icon" /></span>
	<span>{name}</span>
</a>

<style lang="scss"></style>
