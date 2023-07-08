<template>
  <div class="documents-container">
    <h1>Documents</h1>
    <DocumentCard description="Die Satzung des DD-IX." image="/documents/satzung.jpg"
                  slug="https://github.com/dd-ix/documents"
                  title="Satzung"></DocumentCard>
    <DocumentCard description="Der Code of Conduct des DD-IX." image="/documents/satzung.jpg"
                  slug="https://github.com/dd-ix/documents"
                  title="Code of Conduct"></DocumentCard>
    <DocumentCard description="Der Beitragsordnung des DD-IX." image="/documents/satzung.jpg"
                  slug="https://github.com/dd-ix/documents"
                  title="Beitragsordnung"></DocumentCard>
    <DocumentCard description="Der Mitgliedsantrag des DD-IX." image="/documents/satzung.jpg"
                  slug="https://github.com/dd-ix/documents"
                  title="Mitgliedsantrag"></DocumentCard>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  margin: 0;
}

.documents-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
<script lang="ts" setup>
import DocumentCard from "~/compoents/DocumentCard.vue";
</script>
