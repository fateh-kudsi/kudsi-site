<template>
  <div>
    <PageTitle title="about us" animate="slideInRight"></PageTitle>
    <about1 />
    <about2 />
  </div>
</template>
<script>
import PageTitle from "~/components/PageTitle.vue";
import about1 from "~/components/about1.vue";
import about2 from "~/components/about2.vue";
export default {
  components: {
    PageTitle,
    about1,
    about2
  }
};
</script>