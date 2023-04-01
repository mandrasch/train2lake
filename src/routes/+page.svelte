<script>
	import { base } from '$app/paths';
</script>

<div
	class="image-container"
	style="background-image: url('{base}/images/oebb_train_to_stainach_irding.jpg')"
>
	<div class="hero-cta">
		<p class="hero-title">Explore awesome destinations by public train and bus in Austria</p>
		<a class="hero-button" role="button" href="{base}/destinations">Take me to the lakes!</a>
	</div>
</div>

<style lang="scss">
	.image-container {
		max-width:1750px;
		margin:0 auto;
		position: relative;
		height: 80vh;
		background-size: cover;
		background-position: right;
	}
	.hero-cta {
		position: absolute;
		right: 5%;
		bottom: 5%;
		padding: 20px;
		background: white;
		text-align: right;
		background-color:rgba(255,255,255,0.85);
		max-width:350px;

		.hero-title {
			margin-top: 20px;
			font-size: 1.4rem;
			font-weight: bold;
			text-align: center;
		}
		.hero-button{
			width:100%;
		}
	}
</style>
