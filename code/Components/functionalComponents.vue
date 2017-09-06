<script>
export default {
   functional: true,
   props:["title","size"],
    render: function (createElement, context) {
        return createElement(`h${context.props.size}`, context.props.title)
  },
}
</script>

<style>
  
</style>
