export default {
  async fetch(request, env) {
    const inputs = {
      prompt: "a cool space cat on a rocket playing the paino being chased by another space cat on a rocket",
    };

    const response = await env.AI.run(
      "@cf/stabilityai/stable-diffusion-xl-base-1.0",
      inputs,
    );

    return new Response(response, {
      headers: {
        "content-type": "image/png",
      },
    });
  },
} satisfies ExportedHandler<Env>;
