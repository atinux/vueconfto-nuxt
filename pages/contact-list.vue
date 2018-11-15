<template>
  <div class="p-8">
    <contact-list>
      <template slot-scope="{ contact }">
        {{ contact.name.first }}
      </template>
    </contact-list>
  </div>
</template>

<script>
import ContactList from "@/components/ContactList.vue"

export default {
  name: "ContactListPage",
  components: {
    ContactList
  }
}
</script>
