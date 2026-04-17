<template>
  <div class="relative overflow-hidden rounded-3xl bg-base-100 px-6 py-10 shadow-sm sm:px-10 lg:px-14">
    <div class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.15),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.14),transparent_32%)]"></div>

    <div class="mx-auto flex max-w-6xl flex-col gap-12">
      <section class="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
        <div class="space-y-6">
          <span class="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary-content">
            About WEGOSTORE
          </span>
          <div class="space-y-4">
            <h1 class="max-w-2xl text-4xl font-bold tracking-tight text-base-content sm:text-5xl">
              We build a smoother way to discover products you actually want.
            </h1>
            <p class="max-w-2xl text-lg leading-8 text-base-content/75">
              WEGOSTORE blends clean design, useful product discovery, and a simple shopping flow so browsing feels fast, clear, and enjoyable.
            </p>
          </div>

          <div class="flex flex-wrap gap-3">
            <div class="rounded-2xl border border-base-300 bg-base-100 px-5 py-4">
              <p class="text-sm text-base-content/60">Curated products</p>
              <p class="text-2xl font-bold">120+</p>
            </div>
            <div class="rounded-2xl border border-base-300 bg-base-100 px-5 py-4">
              <p class="text-sm text-base-content/60">Fast browsing</p>
              <p class="text-2xl font-bold">24/7</p>
            </div>
            <div class="rounded-2xl border border-base-300 bg-base-100 px-5 py-4">
              <p class="text-sm text-base-content/60">Happy shoppers</p>
              <p class="text-2xl font-bold">9k+</p>
            </div>
          </div>
        </div>

        <div class="grid gap-4">
          <div class="rounded-3xl bg-base-200 p-6 shadow-md">
            <p class="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Our mission</p>
            <p class="mt-3 text-lg leading-8 text-base-content/80">
              Make product discovery feel simple, visual, and trustworthy for everyday shoppers.
            </p>
          </div>
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="rounded-3xl bg-base-100 p-6 shadow-md ring-1 ring-base-300/60">
              <p class="text-sm text-base-content/60">Design</p>
              <p class="mt-2 text-xl font-semibold">Clean and focused</p>
            </div>
            <div class="rounded-3xl bg-base-100 p-6 shadow-md ring-1 ring-base-300/60">
              <p class="text-sm text-base-content/60">Experience</p>
              <p class="mt-2 text-xl font-semibold">Quick and intuitive</p>
            </div>
          </div>
        </div>
      </section>

      <section class="grid gap-5 md:grid-cols-3">
        <article class="rounded-3xl bg-base-100 p-6 shadow-sm ring-1 ring-base-300/60">
          <p class="text-sm font-semibold text-primary">Discover</p>
          <h2 class="mt-3 text-xl font-bold">Browse with confidence</h2>
          <p class="mt-2 leading-7 text-base-content/70">
            Organized layouts and smooth navigation help shoppers move from curiosity to checkout faster.
          </p>
        </article>
        <article class="rounded-3xl bg-base-100 p-6 shadow-sm ring-1 ring-base-300/60">
          <p class="text-sm font-semibold text-secondary">Compare</p>
          <h2 class="mt-3 text-xl font-bold">See what matters</h2>
          <p class="mt-2 leading-7 text-base-content/70">
            Important product details stay visible so users can compare options without friction.
          </p>
        </article>
        <article class="rounded-3xl bg-base-100 p-6 shadow-sm ring-1 ring-base-300/60">
          <p class="text-sm font-semibold text-accent">Trust</p>
          <h2 class="mt-3 text-xl font-bold">A calm shopping flow</h2>
          <p class="mt-2 leading-7 text-base-content/70">
            Clear structure, readable content, and a polished visual style keep the experience easy to use.
          </p>
        </article>
      </section>

      <section class="rounded-3xl bg-neutral text-neutral-content p-8 sm:p-10">
        <div class="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.25em] text-base-100/70">Why we exist</p>
            <h2 class="mt-3 text-3xl font-bold sm:text-4xl">Shopping should feel simple, not overwhelming.</h2>
            <p class="mt-4 max-w-3xl leading-8 text-base-100/80">
              That is why this store focuses on clarity, speed, and a visual hierarchy that makes products easy to scan and compare.
            </p>
          </div>

          <div class="rounded-2xl bg-base-100/10 px-6 py-5 backdrop-blur">
            <p class="text-sm text-base-100/70">Built for</p>
            <p class="mt-1 text-2xl font-bold">Modern product browsing</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
  console.log("AboutView mounted");
});

onUnmounted(() => {
  console.log("AboutView unmounted");
});
</script>