<!-- PostSkeleton.svelte -->
<div class="post">
  <div class="info">
    <div class="skeleton-title"></div>
    <div class="itemInfo">
      <div class="skeleton-meta"></div>
      <div class="skeleton-meta"></div>
      <div class="skeleton-meta"></div>
    </div>
  </div>
</div>

<style>
  @keyframes pulse {
    0% { opacity: 0.6; }
    50% { opacity: 1; }
    100% { opacity: 0.6; }
  }

  .skeleton-title {
    height: 24px;
    background: var(--tertiary-color);
    border-radius: 4px;
    animation: pulse 1.5s infinite;
  }

  .skeleton-meta {
    width: 80px;
    height: 16px;
    background: var(--tertiary-color);
    border-radius: 4px;
    margin: 8px 16px 8px 0;
    display: inline-block;
    animation: pulse 1.5s infinite;
  }
  
  .info {
    padding: 0.5rem;
  }
</style>