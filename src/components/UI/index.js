const uiComponentNames = [
    'BtnLight',
    'BtnIndigo'
];

export default uiComponentNames.map(a => require(`@/components/UI/${a}.vue`).default);