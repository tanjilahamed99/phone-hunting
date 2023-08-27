const loadData = async (inputText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${inputText}`)
    const data = await res.json();
    const PhoneData = data.data;
    displayData(PhoneData, isShowAll);
};

const displayData = (phones, showAll) => {
    // console.log(phones);
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';

    const showMore = document.getElementById('show-more');
    if (phones.length > 12 && !showAll) {
        showMore.classList.remove('hidden')
    } else {
        showMore.classList.add('hidden');
    }
    if(!showAll){
        phones = phones.slice(0, 12);
    }
    phones.forEach(phone => {
        // console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-purple-300 shadow-xl p-10 mt-10`
        phoneCard.innerHTML = `
       <div class="">
          <figure><img src="${phone.image}" alt="Shoes" /></figure>
          <div class="card-body">
             <h2 class="card-title">${phone.phone_name}</h2>
             <p>If a dog chews shoes whose shoes does he choose?</p>
           <div class="card-actions">
              <button class="btn btn-primary">Buy Now</button>
            </div>
         </div>
       </div>
       `
        phoneContainer.appendChild(phoneCard);
    })
    loading(false);
};

const phoneSearch = (isShowAll) => {
    const inputFiled = document.getElementById('input-filed');
    const inputText = inputFiled.value;
    // console.log(inputText);
    loadData(inputText, isShowAll);
};

const loading = (isLoading) => {
    const loading = document.getElementById('loading');
    if (isLoading) {
        loading.classList.remove('hidden');
    } else {
        loading.classList.add('hidden');
    }
}

// show all button
const showAll = () => {
    phoneSearch(true);
}
