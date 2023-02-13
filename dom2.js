<script>
document.getElementById('form').onsubmit = function() {
    alert('hello, ' + document.getElementById('name').value + '!');
    return false;
};
</script>