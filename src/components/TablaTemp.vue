<template>
  <div class="row justify--center">
    <div class="flex md6 lg4">
      <va-card stripe stripe-color="success">
        <div class="va-table-responsive row justify--center">
          <table class="va-table va-table--hoverable">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Country</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.id">
                <td>{{ user.fullname }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.country }}</td>
                <td>
                  <va-badge :text="user.status" :color="user.status" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </va-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { users } from "../Strorage/Users.json";

export default defineComponent({
  data() {
    return {
      users: users.slice(0, 4),
    };
  },
});
</script>

<style scoped>
.va-table-responsive {
  overflow: auto;
}

.center {
  width: 100%;
  padding-left: 3%;
}
</style>
