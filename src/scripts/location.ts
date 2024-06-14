const openPopupButton: HTMLElement | null = document.getElementById('city-name');
const regionPopup: HTMLDialogElement | null = document.getElementById('region-Popup') as HTMLDialogElement;
const confirmRegionButton: HTMLButtonElement | null = document.getElementById('confirm-Region') as HTMLButtonElement;
const changeRegionButton: HTMLButtonElement | null = document.getElementById('change-Region') as HTMLButtonElement;
const showRegions: HTMLCollectionOf<Element> = document.getElementsByClassName('header__region') as HTMLCollectionOf<Element>;
const cityNameElement: HTMLElement | null = document.getElementById('city-name');
const headerElement: any = document.getElementsByClassName('header');

if (openPopupButton && regionPopup && confirmRegionButton && changeRegionButton && cityNameElement) {
    openPopupButton.addEventListener('click', () => {
        regionPopup.style.display = 'flex';
        confirmRegionButton.style.display = 'flex';
        changeRegionButton.style.display = 'flex';
        document.body.classList.add('no-scroll');
        headerElement.classList.add('fixed-header');
    });

    if (window.innerWidth > document.documentElement.clientWidth) {
    }

    confirmRegionButton.addEventListener('click', () => {
        regionPopup.style.display = 'none';
        confirmRegionButton.style.display = 'none';
        changeRegionButton.style.display = 'none';
        document.body.classList.remove('no-scroll');
        headerElement.classList.remove('fixed-header');
    });

    changeRegionButton.addEventListener('click', () => {
        if (regionPopup) {
            regionPopup.style.display = 'none';
        }

        const cityModalTemplate = document.getElementById('city-modal') as HTMLTemplateElement;
        if (cityModalTemplate) {
            const cityDialog = cityModalTemplate.content.querySelector('#city-dialog') as HTMLDialogElement;
            if (cityDialog) {
                document.body.appendChild(cityDialog);
                cityDialog.showModal();
                

                const cityList = cityDialog.querySelector('#city-list') as HTMLUListElement;
                if (cityList) {
                    Array.from(showRegions).forEach(region => {
                        region.addEventListener('click', () => {
                            const selectedCity = region.textContent || '';
                            if (cityNameElement) {
                                cityNameElement.textContent = selectedCity;
                            }
                            localStorage.setItem('selectedCity', selectedCity);
                            cityDialog.close();
                            document.body.removeChild(cityDialog);
                            document.body.classList.remove('no-scroll');
                            headerElement.classList.remove('fixed-header');
                        });
                    });
                }
            }
        }
    });

    const storedCity = localStorage.getItem('selectedCity');
    if (storedCity) {
        cityNameElement.textContent = storedCity;
    }
}
