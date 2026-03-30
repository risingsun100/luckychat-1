// main.js

// Define the Web Component for fortune display
class FortuneDisplay extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = `
            :host {
                display: block;
                background-color: #ecf0f1;
                padding: 20px;
                border-radius: 8px;
                margin-top: 20px;
                box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);
                color: #2c3e50;
                font-size: 1.1em;
                line-height: 1.6;
                text-align: center;
            }
            h3 {
                color: #e74c3c;
                margin-bottom: 10px;
                font-size: 1.4em;
            }
            p {
                margin: 0;
            }
            .hidden {
                display: none;
            }
        `;

        const content = document.createElement('div');
        content.innerHTML = `
            <div id="fortune-content" class="hidden">
                <h3></h3>
                <p></p>
            </div>
        `;

        shadow.appendChild(style);
        shadow.appendChild(content);
    }

    static get observedAttributes() {
        return ['fortune-text'];
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        if (this.shadowRoot) {
            const fortuneContent = this.shadowRoot.getElementById('fortune-content');
            const h3 = fortuneContent.querySelector('h3');
            const p = fortuneContent.querySelector('p');

            if (attr === 'fortune-text') {
                p.textContent = newValue;
                h3.textContent = newValue ? `오늘의 운세는...` : '';
            }

            if (this.getAttribute('fortune-text')) {
                fortuneContent.classList.remove('hidden');
            } else {
                fortuneContent.classList.add('hidden');
            }
        }
    }
}

customElements.define('fortune-display', FortuneDisplay);

// Fortune generation logic
const fortunes = [
    "오늘은 당신에게 행운이 가득한 날입니다. 새로운 도전을 두려워하지 마세요!",
    "작은 어려움이 예상되지만, 현명하게 대처하면 큰 기회가 될 것입니다.",
    "사랑하는 사람과의 관계가 더욱 깊어질 수 있는 하루입니다. 솔직한 대화가 필요해요.",
    "재물운이 따르니, 예상치 못한 수입이 생길 수 있습니다. 하지만 과소비는 금물!",
    "건강에 유의해야 할 시기입니다. 충분한 휴식과 운동이 필요합니다.",
    "오랫동안 바라던 일이 드디어 이루어질 조짐이 보입니다. 꾸준히 노력하세요.",
    "주변 사람들과의 협력이 중요한 날입니다. 혼자 해결하려 하지 마세요.",
    "새로운 인연을 만날 수 있는 기회가 찾아올 것입니다. 마음을 열고 다가가세요.",
    "예상치 못한 변화가 찾아올 수 있습니다. 유연하게 대처하는 지혜가 필요합니다.",
    "오늘은 당신의 창의력이 빛을 발하는 날입니다. 아이디어를 현실로 만들어보세요!"
];

document.addEventListener('DOMContentLoaded', () => {
    const fortuneForm = document.getElementById('fortuneForm');
    const birthdateInput = document.getElementById('birthdate');
    const fortuneDisplayElement = document.querySelector('fortune-display');

    fortuneForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const birthdate = birthdateInput.value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const calendarType = document.querySelector('input[name="calendarType"]:checked').value;

        if (birthdate === "") {
            alert("생년월일을 모두 입력해주세요.");
            return;
        }

        const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

        // Update the Web Component attributes
        fortuneDisplayElement.setAttribute('fortune-text', randomFortune);
    });
});
