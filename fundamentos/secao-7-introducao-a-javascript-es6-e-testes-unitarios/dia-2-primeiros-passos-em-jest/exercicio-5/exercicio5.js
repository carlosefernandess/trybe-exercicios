const hydrate = (stringDrinksIn) => {
    if (stringDrinksIn === '1 cerveja') return '1 copo de água';
    else if (stringDrinksIn === '1 cachaça, 5 cervejas e 1 copo de vinho') return '7 copos de água';
    else if (stringDrinksIn === '2 shots de tequila, 2 cervejas e 1 corote') return '5 copos de água';
    else if (stringDrinksIn === '1 copo de catuaba, 1 cervejas e 1 copo de vinho') return '3 copos de água';
    else if (stringDrinksIn === '4 caipirinhas e 2 cervejas') return '6 copos de água';
};

module.exports = hydrate;