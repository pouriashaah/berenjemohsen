export default {
    message_handler(context,message) {
        context.commit("message_controller",message)
        setTimeout(() => {
            context.commit("message_controller","")
        }, 2000);
    }
}