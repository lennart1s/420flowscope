<template>
    <div id="chat" class="rounded-lg">
      <v-list id="scrollableList" class="rounded-lg overflow-y-auto">
        <v-list-item
        v-for="(message, index) in messages"
        :key="index"
        :title="message.msg"
        >
          <com-message :msgObj="message" :index="index"/>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-text-field id="textInput" label="Message"></v-text-field>
    </div>
</template>

<script>
import messages from '../assets/messages.json';
import ComMessage from './ComMessage.vue';

export default {
  components: { ComMessage },
  name: 'ComChat',
  data() {
    return {
      messages: messages.messages,
    };
  },
};
</script>

<style scoped>
#chat {
  background-color: #a0dce8;
  height: 100%;
}
#scrollableList {
  background-color: #a0dce8;
  max-height: 85%;
}
#textInput {
  padding-left: 5px;
}
</style>
