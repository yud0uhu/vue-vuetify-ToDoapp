<template>
  <v-form>
    <v-container>
      <v-row>

        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="newItem"
            solo
            label="ToDo"
            clearable
          ></v-text-field>
          <button
            v-on:click="addItem"
          >Add</button>
        </v-col>

      </v-row>
    </v-container>

    <v-container>
      <v-date-picker
      v-model="picker"
      reactive
      locale="jp-ja"
      :day-format="date => new Date(date).getDate()"
    ></v-date-picker>
    </v-container>

  </v-form>

</template>
