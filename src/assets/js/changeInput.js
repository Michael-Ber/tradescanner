export const changeInput = () => {
    try {
        const amounts = document.querySelectorAll('.payment-item__amount');
        amounts.forEach(amount => {
            const minus = amount.querySelector('.payment-item__minus');
            const plus = amount.querySelector('.payment-item__plus');
            const input = amount.querySelector('.payment-item__value');

            minus.addEventListener('click', () => {
                if(input.value > 0) {
                    input.value--;
                }
            })
            plus.addEventListener('click', () => {
                if(input.value < 9) {
                    input.value++;
                }
            })
        })
    } catch (error) {
        console.log(error)
    }
}