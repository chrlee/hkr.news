<span class="loader"></span>

<style>
.loader{
  display: inline-block;
  font-weight: 400;
  position: relative;
  padding: 0 0.5rem;
}
.loader:before{
  content: '';
  animation: 1s print linear alternate infinite;
}
@keyframes print {
  0% { content: 'Loading'}
  33% { content: 'Loading.'}
  66% { content: 'Loading..'}
  100% { content: 'Loading...'}
}
</style>
