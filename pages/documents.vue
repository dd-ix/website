<template>
    <div class="documents-container">
        <h1>Documents</h1>
        <DocumentCard slug="/documents/satzung.pdf" image="/documents/satzung.jpg" title="Satzung"
                      description="Die Satzung des DD-IX."></DocumentCard>
        <DocumentCard slug="/documents/satzung.pdf" image="/documents/satzung.jpg" title="Code of Conduct"
                      description="Der Code of Conduct des DD-IX."></DocumentCard>
        <DocumentCard slug="/documents/satzung.pdf" image="/documents/satzung.jpg" title="Beitragsordnung"
                      description="Der Beitragsordnung des DD-IX."></DocumentCard>
        <DocumentCard slug="/documents/satzung.pdf" image="/documents/satzung.jpg" title="Mitgliedsantrag"
                      description="Der Mitgliedsantrag des DD-IX."></DocumentCard>
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
<script setup lang="ts">
import DocumentCard from "~/compoents/DocumentCard.vue";
</script>
