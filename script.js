document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // 1. 切换按钮的 active 状态
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // 2. 切换内容的显示
            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            const activeContent = document.getElementById(targetTab);
            if (activeContent) {
                activeContent.classList.add('active');
            }
        });
    });

    // 默认激活第一个选项卡 (Licence)
    document.querySelector('.tab-button[data-tab="licence"]').click();
});