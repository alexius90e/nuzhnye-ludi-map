const workRegionsItems = document.querySelectorAll('.work-regions__regions-list-item');
const workRegionsMap = document.querySelector('.work-regions__map');
const workRegionsElem = document.querySelector('.work-regions');

if (workRegionsMap) {
  workRegionsItems.forEach((workRegionsItem) => {
    workRegionsItem.addEventListener('pointerenter', (event) => {
      const regionName = event.currentTarget.dataset.region;
      const regionPath = workRegionsMap.querySelector(`path[data-region='${regionName}']`);
      const allRegionPaths = workRegionsMap.querySelectorAll('path');
      if (regionPath) {
        allRegionPaths.forEach((path) => path.classList.remove('active'));
        regionPath.classList.add('active');
      }
    });
  });
}

if (workRegionsElem && workRegionsMap) {
  workRegionsElem.addEventListener('pointerover', () => {
    const allRegionPaths = workRegionsMap.querySelectorAll('path');
    allRegionPaths.forEach((path) => path.classList.remove('active'));
  });
}
