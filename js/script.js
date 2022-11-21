function encaminha(escolha){
    if(escolha == 'Futebol'){
        localStorage.setItem("conteudoEscolhido", "Futebol")
        window.location.href = "conteudo.html"
    }
    if(escolha ==  'Basquete'){
        localStorage.setItem("conteudoEscolhido", "Basquete")
        window.location.href = "conteudo.html"
    }
    if(escolha == 'Futsal'){
        localStorage.setItem("conteudoEscolhido", "Futsal")
        window.location.href = "conteudo.html"
    }
    if(escolha == 'Arsenal'){
        localStorage.setItem("conteudoEscolhido", "Candidatos ao Titulo?")
        window.location.href = "conteudo.html"
    }
    if(escolha == 'Copa'){
        localStorage.setItem("conteudoEscolhido", "Seleção brasileira na Copa")
        window.location.href = "conteudo.html"
    }
    if(escolha == 'Golden'){
        localStorage.setItem("conteudoEscolhido", "Golden State Warriors")
        window.location.href = "conteudo.html"
    }
    if(escolha == 'treinoFutebol'){
        localStorage.setItem("conteudoEscolhido", "Treino Futebol")
        window.location.href = "conteudo.html"
    }
    if(escolha == 'treinoBasquete'){
        localStorage.setItem("conteudoEscolhido", "Treino Basquete")
        window.location.href = "conteudo.html"
    }
    if(escolha == 'treinoFutsal'){
        localStorage.setItem("conteudoEscolhido", "Treino Futsal")
        window.location.href = "conteudo.html"
    }
}

function conteudo() {
    escolha = localStorage.getItem("conteudoEscolhido")

    /* CONTEUDO REGRAS FUTEBOL */
    if(escolha == "Futebol"){
        imagem = "img/soccer.jpg"
        textoTitulo1 = "Tudo sobre Futebol"
        textoTitulo2 = "Regras Oficiais"

        paragrafo1 = "O futebol é uma paixão mundial, conhecido como o esporte mais praticado ao redor do mundo. E quando se fala"+
        " de futebol, o Brasil é o País mais apaixonado pelo esporte e o mais vitorioso nele. No entanto, apesar de ser considerado o"+
        " País do futebol, não foi aqui que este esporte nasceu. Trouxemos este resumo do futebol para que você possa aprender um pouco"+
        " mais por este esporte tão popular.<br><br>O futebol se popularizou no Brasil e se tornou uma paixão nacional por volta de 1950,"+
        " quando a Copa do Mundo de Futebol foi realizado no país, com uma grande final entre Brasil x Uruguai no estádio do Maracanã,"+
        " no Rio de Janeiro. Para um público grandioso, a seleção brasileira perdeu aquela final que ficou conhecida como Maracanazzo."+
        " No entanto, a derrota só fez aumentar o amor do brasileiro pelo futebol.<br><br>O primeiro título mundial só aconteceu oito"+
        " anos mais tarde, em 1958, na Copa do Mundo realizada na Suécia. O Brasil, que na época já contava com o jovem Pelé, com apenas"+
        " 17 anos, se tornou o primeiro campeão a vencer fora do seu continente. O segundo título, com Garrincha como o grande herói,"+
        " ocorreu 1962, no Chile. O tricampeonato mundial veio em 1970, com uma grande seleção de jogadores, até hoje considerada uma das"+
        " melhores da história. Pelé, Zagallo, Carlos Alberto Torres, Gérson, Tostão, Jairzinho e Rivelino trouxeram a taça Jules Rimet do México."+
        "<br><br>Após um longo jejum, o Brasil só voltou a comemorar uma Copa do Mundo em 1994, nos EUA, tendo como heróis nomes como Romário, Bebeto,"+
        " Dunga, Branco, Raí e outros. Em 2002, no Japão, Ronaldo, Rivaldo, Ronaldinho Gaúcho, Cafu, Roberto Carlos, Marcos e companhia trouxeram"+
        " o pentacampeonato para o Brasil após a final contra a Alemanha, tornando a seleção brasileira na maior vencedora de títulos mundiais."

        paragrafo2 = "O futebol é um esporte cujo campo de grama apresenta 105 metros de comprimento por 68 metros de largura, uma padronização da Fifa."+
        " Duas equipes compostas por 11 jogadores disputam uma partida em que o objetivo é marcar o máximo possível de gols. Jogadas violentas podem ser"+
        " punidas com cartões amarelo (serve como advertência) e vermelho (expulsão do jogador), e somente o goleiro pode usar as mãos durante a partida."+
        " Faltas cometidas dentro da área são punidas com a marcação de pênalti (cobrança feita de uma marca que fica a 11 metros do gol). "+
        "<br><br> As partidas duram 90 minutos (divididos em dois tempos de 45 minutos), e as pausas são repostas com acréscimos determinados pelo árbitro. "+
        "Em disputas eliminatórias, comumente conhecidas como mata-mata, se o jogo estiver empatado é realizada a prorrogação, composta por 30 minutos "+
        "(divididos em dois tempos de 15 minutos). Caso a disputa permaneça empatada, haverá cobrança de pênaltis para definição do vencedor."
    }

    /* CONTEUDO REGRAS BASQUETE */
    if(escolha == "Basquete"){
        imagem = "img/basketball.jpg"
        textoTitulo1 = "Tudo sobre Basquete"
        textoTitulo2 = "Regras Oficiais"

        paragrafo1 = "<br>O basquete, como é conhecido no Brasil, é um esporte criado em 1891 pelo pastor canadense presbiteriano"+
        "e também professor de educação física da Associação Cristã de Moços, James Naismith. O nome em inglês, basketball, significa bola"+
        "no cesto. É um dos esportes mais populares do mundo."+
        "<br><br>O jogo é disputado por duas equipes de cinco jogadores que tem por objetivo passar a bola por dentro do cesto disposto nas"+
        "extremidades do campo. Os cestos ficam a uma altura de três metros e cinco centímetros. Os jogadores batem a bola contra o chão caminhando"+
        "dentro do campo, podendo repassá-la a um jogador da equipe."+
        "<br><br>O primeiro jogo de Basquete ocorreu em 20 de janeiro de 1892, quando cada equipe, composta por nove jogadores, era assistida apenas"+
        "por funcionários da ACM (Associação Cristã de Moços)."+
        "<br><br>O basquete feminino se iniciou em 1892, com a adaptação das regras propostas pela professora de Educação Física, Senda Berenson."+
        "<br><br>No Brasil, a prática do Basquete iniciou em 1906, quando o esporte foi instituído na Escola Normal de São Paulo pelo professor Oscar Thompson."+
        "<br><br>O objetivo do jogo é colocar a bola no cesto da equipe adversária, marcando pontos. O jogo é iniciado com o lançamento da bola no ar. A duração é"+
        "de quatro períodos de dez minutos, com um intervalo de meio tempo entre o segundo e o terceiro período."+"<br>O basquete é um exercício que requer força nos"+
        "ombros e coxas. É um bom exercício cardiovascular, o risco de lesões consiste na entorse de tornozelo e colisões com outros jogadores."+
        "<br><br>O gasto calórico em uma hora de jogo é de 600 calorias. Pode ser praticado ao ar livre, em praças, parques e escolas. É importante beber bastante"+
        "líquido antes e durante o jogo."

        paragrafo2 = "<br>A quadra do basquetebol tem formato retangular e tem medidas oficiais de vinte e oito metros de comprimento por quinze de largura. As linhas centrais "+
        "são traçadas paralelamente às linhas de fundo e em seu centro é desenhado um círculo com cento e oitenta centímetros de raio. A partir dele, o jogo se inicia."+
        "<br><br>A zona da cesta de três pontos é traçada trazendo como referência o ponto central do aro até seis metros e vinte e cinco centímetros para cada lado. "+
        "A partir dessa medida, as cestas valem três pontos."+
        "<br><br>O jogo de basquete é formado por 10 atletas, 5 de cada equipe. Além desses jogadores, cada time deve ter no mínimo 3 e no máximo 7 no banco de reservas."+
        "<br><br>Os cinco jogadores em quadra se dividem em três posições: armador, ala e pivô. A maior parte dos times jogam com um pivô, dois armadores e dois alas."+
        "<br><br>A partida de basquete tem a duração corrida de 40 minutos. Esse tempo é dividido em 4 partes, cada uma com 10 minutos. Porém, você deve estar se perguntando "+
        "por que você já viu jogos de basquete (inclusive a maioria deles) que duraram bem mais que isso."+
        "<br><br>É simples: todas as vezes que a bola para ou sai de jogo, o cronômetro é pausado. Por isso, na prática, cada quarto tem bem mais que dez minutos."+
        "<br><br>Outro ponto interessante é que podem ser computados pontos para uma equipe com o cronômetro zerado. É que se um jogador fizer um arremesso faltando"+
        " um segundo para acabar o jogo, enquanto a bola estiver em sua trajetória, a pontuação ainda está valendo. Daí vem aquelas cestas históricas e heroicas que acompanhamos ao longo dos anos."
    }

    /* CONTEUDO REGRAS FUTSAL */
    if(escolha == "Futsal"){
        imagem = "img/futsal.jpg"
        textoTitulo1 = "Tudo sobre Futsal"
        textoTitulo2 = "Regras Oficiais"

        paragrafo1 = "<br>O futsal, também chamado de futebol de salão, é um esporte coletivo semelhante ao futebol de campo, porém possui suas peculiaridades."+
        "<br><br>Ainda que sejam semelhantes, o futsal possui regras específicas e diferencia-se, por exemplo, pelo número de jogadores e as dimensões do espaço de jogo."+
        "<br><br>No Brasil, o futsal tem tido grande representatividade nas últimas décadas. Ao lado do futebol, é o esporte mais praticado no país por homens e mulheres."+
        "<br><br>O futsal é uma modalidade esportiva famosa no Brasil. Tanto em jogos amadores, quanto profissionais. O esporte também é um dos mais praticados e estudados "+
        "nas escolas brasileiras, na grade curricular da disciplina de Educação Física."+
        "<br><br>O Brasil tem cinco títulos de campeão mundial na Copa do Mundo de Futsal, organizada pela Federação Internacional de Futebol (FIFA). E ainda dois títulos anteriores, "+
        "quando o campeonato era organizado pela Federação Internacional de Futebol de Salão (Fifusa)."+
        "<br><br>Foi também o primeiro campeão mundial do esporte, em 1982, no I Campeonato do Mundo de Futebol de Salão, em São Paulo. Ao todo, são sete títulos mundiais, "+
        "sendo o maior campeão na modalidade."
        
        paragrafo2 = "<br>A partida de futsal é realizada com duas equipes, cada uma composta por cinco jogadores, incluindo o goleiro. Não é possível "+
        "iniciar o jogo com menos de três atletas em um time."+
        "<br><br>O jogo de futsal tem duração de dois tempos de 20 minutos cada. Esse tempo é válido para as categorias sub-20, sub-17 e de adultos. O intervalo pode chegar até 15 minutos."+
        "<br><br>A quantidade de substituições durante a partida é ilimitada. São nove jogadores, no máximo, que podem ocupar as cadeiras de reserva em cada equipe."
    }

    /* CONTEUDO ARTIGOS */
    if(escolha == "Candidatos ao Titulo?"){
        imagem = "img/arsenal.jpg"
        textoTitulo1 = "Candidatos ao titulo?"
        paragrafo1 = "<br>O Arsenal atravessa um início de temporada excelente na Premier League, com um aproveitamento de candidato ao título. "+
        "E a confiança sobre o futebol dos Gunners se torna mais concreta pela maneira como o time se prova sólido contra alguns dos "+
        "principais concorrentes. Não há dúvidas de que, hoje, o estágio da equipe de Mikel Arteta é bem mais avançado que o de um Chelsea "+
        "inconstante, que busca seus rumos com Graham Potter. E isso se provou em campo, com uma importante vitória em Stamford Bridge. "+
        "Mais propositivo durante os 90 minutos, o Arsenal ganhou por 1 a 0 e assegurou mais uma rodada na liderança."+
        "<br><br>A partida ofereceu duas propostas de jogo bastante distintas desde os minutos iniciais. O Arsenal controlava o meio-campo "+
        "e exercia uma pressão no ataque. Já o Chelsea esperava o momento de atacar em velocidade. Apesar da energia inicial dos Gunners na casa dos adversários, "+
        "os Blues tiveram a primeira boa escapada com Kai Havertz, mas o cruzamento rasgou a área sem encontrar ninguém. Logo viria a resposta dos visitantes, "+
        "num tiro de Ben White para fora. O trabalho do Arsenal com a bola era melhor, mas o Chelsea também ameaçava nos cruzamentos."+
        "<br><br>Não seria um primeiro tempo de muitas chances claras de gol. As defesas prevaleceram e conseguiram neutralizar os perigos. "+
        "O melhor lance do Arsenal viria aos 28, num cruzamento de Gabriel Martinelli para Gabriel Jesus, que não conectou bem a "+
        "cabeçada e mandou para fora. Do outro lado, Havertz também poderia ter feito melhor em mais uma incursão pela direita, "+
        "mas o passe fraco seria parado por Aaron Ramsdale. Entretanto, seriam mais erros que acertos na reta final, com o duelo até mais pegado na faixa central."+
        "<br><br>O desenho da partida não mudou no segundo tempo. E o Arsenal se tornou mais agressivo, com a aposta no lado direito, "+
        "por onde se movimentava Bukayo Saka. Os lances de perigo se sucediam. Thomas Partey e Gabriel Martinelli tiveram chances, "+
        "assim como Gabriel Jesus carimbou Mendy numa escapada pela linha de fundo. A bola saiu e o escanteio gerou o gol aos 17. "+
        "Saka cruzou fechado e a bola passou por todo mundo. Coube a Gabriel Magalhães meter o pé na bola quase em cima da linha e correr para celebrar. "+
        "As mudanças de Graham Potter seriam imediatas, com Connor Gallagher e Armando Broja nos lugares de Kai Havertz e Pierre-Emerick Aubameyang."+
        "<br><br>O Chelsea demorou a se entender com as mudanças. O Arsenal continuou melhor, quase sempre com Saka. Foram dois avanços perigosos do ponta. "+
        "E se os Blues não conseguiam se encontrar na tentativa de pressionar, mesmo recuados os Gunners pareciam mais confortáveis nos contra-ataques. "+
        "Jesus puxou uma ótima jogada aos 30, mas a definição de Martin Odegaard para fora deixou a desejar. Haveria até um pedido de pênalti por toque de Marc Cucurella, "+
        "mas o lance aconteceu fora da área. Uma rara ameaça do Chelsea aconteceu com Raheem Sterling, em cruzamento rifado por Ben White, mas era pouco. "+
        "Logo o Arsenal reforçou a marcação. E o time ainda gastou o tempo no ataque, sem grandes riscos de tomar o empate. No máximo, houve uma confusão na linha de fundo, "+
        "que não auxiliou em nada os Blues."

        textoTitulo2 = ""
        paragrafo2 = ""
        document.querySelector('#section2').setAttribute("style", "display: none;")
        document.querySelector('#titulo-cabecalho').setAttribute("style", "font-size: 100pt; top: 160px;")
    }

    if(escolha == "Seleção brasileira na Copa"){
        imagem = "img/Selecao.jpg"
        textoTitulo1 = "Seleção Brasileira na Copa"
        paragrafo1 = "<br>A Seleção Brasileira está convocada para a Copa do Mundo FIFA Qatar 2022. Em busca da tão sonhada sexta estrela dourada, "+
        "o técnico Tite anunciou os 26 atletas que defenderão a amarelinha no Mundial."+
        "<br><br>A novidade neste ano é o acréscimo de três nomes em relação ao último torneio, quando eram chamados 23 atletas. Na atual lista, "+
        "16 atletas disputarão a Copa do Mundo pela primeira vez."+
        "<br><br>Entre os mais experientes, o destaque fica por conta de Thiago Silva, que vai para a sua quarta participação na principal competição do mundo."+
        "<br><br>No cargo desde 2016, o treinador da Seleção Brasileira tem apenas cinco derrotas em 76 jogos – 58 vitórias, 13 empates e 5 derrotas - "+
        "teve todo o ciclo do Mundial para fazer testes e escolher o melhor conjunto para a competição que tem início no dia 20 de novembro com a partida "+
        "entre o Catar, seleção anfitriã, contra o Equador."+
        "<br><br>A estreia brasileira está marcada para o dia 24 de novembro contra a Sérvia. A seleção pentacampeã do mundo está no grupo G, que também conta com Camarões e Suíça."+
        "<br><br>Confira a lista dos 26 nomes que defenderão a Seleção Brasileira na Copa do Mundo"+
        "<br><br>Convocação da Seleção Brasileira para a Copa do Mundo FIFA Qatar 2022"+
        "<br><br>GOLEIROS"+
        "<br>Alisson - Liverpool (ING)"+
        "<br>Ederson - Manchester City (ING"+
        "<br>Weverton – Palmeiras (BRA)"+
        "<br><br>LATERAIS"+
        "<br>Alex Sandro - Juventus (ITA)"+
        "<br>Alex Telles - Sevilla (ESP)"+
        "<br>Dani Alves – Pumas (MEX"+
        "<br>Danilo - Juventus (ITA)"+
        "<br><br>ZAGUEIROS"+
        "<br>Bremer - Juventus (ITA)"+
        "<br>Éder Militão - Real Madrid (ESP)"+
        "<br>Marquinhos - Paris Saint Germain (FRA)"+
        "<br>Thiago Silva - Chelsea (ING)"+
        "<br><br>MEIAS"+
        "<br>Bruno Guimarães - Newcastle (ING)"+
        "<br>Casemiro - Manchester United (ING)"+
        "<br>Everton Ribeiro - Flamengo (BRA)"+
        "<br>Fabinho - Liverpool (ING"+
        "<br>Fred - Manchester United (ING)"+
        "<br>Lucas Paquetá - West Ham United (ING)"+
        "<br><br>ATACANTES"+
        "<br>Antony - Manchester United (ING)"+
        "<br>Gabriel Jesus – Arsenal (ING)"+
        "<br>Gabriel Martinelli – Arsenal (ING)"+
        "<br>Neymar Jr. - Paris Saint Germain (FRA)"+
        "<br>Pedro – Flamengo (BRA)"+
        "<br>Raphinha - Barcelona (ESP)"+
        "<br>Richarlison - Tottenham (ING)"+
        "<br>odrygo - Real Madrid (ESP)"+
        "<br>Vinicius Jr. - Real Madrid (ESP)"

        textoTitulo2 = ""
        paragrafo2 = ""
        document.querySelector('#section2').setAttribute("style", "display: none;")
        document.querySelector('#titulo-cabecalho').setAttribute("style", "font-size: 100pt; top: 160px;")
    }

    if(escolha == "Golden State Warriors"){
        imagem = "img/golden state warriors.jpg"
        textoTitulo1 = "O que está acontecendo com os campeões?"
        paragrafo1 = '<br>O Golden State Warriors voltou a decepcionar em jogo fora de casa, na noite desta quinta-feira (3). Os atuais '+
        'campeões da NBA levaram uma dura virada do Orlando Magic, pelo placar de 130 a 129, e acumularam o quinto revés em '+
        'cinco jogos longe da sua torcida. Pela mesma rodada, o Denver Nuggets bateu o Oklahoma City Thunder.'+
        '<br><br>Em Orlando, os Warriors sofreram a quarta derrota consecutiva na temporada diante do time que até então tinha a '+
        'pior campanha da competição. Tudo parecia dentro do roteiro esperado até o terceiro quarto, quando a vantagem dos visitantes '+
        'chegava a 16 pontos. Mas o Magic buscou a virada no último período, surpreendendo os favoritos.'+
        '<br><br>— É muito difícil vencer um jogo da NBA quando você concede 46 arremessos livres ao adversário. Mesmo quando liderávamos '+
        'por 16 pontos, não parecia certo fazer tantas faltas. Dava para sentir isso. Precisamos dar o crédito ao Orlando. Vamos encarar o '+
        'melhor de cada time e ontem tivemos a melhor versão do Magic —  declarou Steve Kerr, técnico dos Warriors.'+
        '<br><br>A sexta derrota em nove jogos foi sofrida nesta quinta apesar do bom desempenho de Stephen Curry, cestinha do duelo, com 39 pontos. '+
        'Ele ainda contribuiu com nove assistências. Klay Thompson ajudou com 27 pontos. Pelo Magic, Jalen Suggs foi o destaque, com 26, enquanto Paolo Banchero marcou 22.'+
        '<br><br>Com mais um tropeço, o atual campeão ocupa a parte inferior da tabela da Conferência Oeste, no modesto 12º lugar. '+
        '<br><br>— Tivemos nove jogos até agora e tivemos uma razoável combinação (de estratégias e escalação). Então, agora é a hora de '+
        'tentar algo diferente. Todo mundo terá a chance de jogar. Vamos tentar encontrar combinações que funcionem — avisou Kerr.'+
        '<br><br>O Magic, por sua vez, faturou apenas a sua segunda vitória na temporada, em nove jogos. Agora a equipe de Orlando é '+
        'dona da segunda pior campanha do campeonato até agora e ocupa o 15º e último lugar da Conferência Leste.'+
        '<br><br>No outro jogo da noite, os Nuggets derrotaram o Thunder por 122 a 110, em casa. Aaron Gordon foi o principal pontuador '+
        'dos anfitriões, com 27. Mas não esteve sozinho. Jamal Murray marcou 24 e Nikola Jokic, MVP das duas últimas temporadas, anotou '+
        'um "triple-double" de 15 pontos, 14 assistências e 13 rebotes. Pelo Thunder, Shai Gilgeous-Alexander foi o cestinha do confronto, com 37 pontos.'+
        '<br><br>Ainda em busca do embalo que exibiu ao longo da temporada passada, o Denver Nuggets soma cinco vitórias e três derrotas, se '+
        'aproximando das primeiras colocações do Oeste. Já o Thunder está na parte inferior da mesma tabela, com o mesmo número de triunfos e revezes: quatro.'

        textoTitulo2 = ""
        paragrafo2 = ""
        document.querySelector('#section2').setAttribute("style", "display: none;")
        document.querySelector('#titulo-cabecalho').setAttribute("style", "font-size: 120pt; top: 160px;")
    }

    if(escolha == "Treino Futebol"){
        imagem = "img/Futebol treino.jpg"
        textoTitulo1 = "Treino especializado Futebol"
        
        paragrafo1 = '<br>E para você, que quer começar a jogar futebol ainda neste verão, existem algumas dicas importantes também. '+
        'Para te ajudar a adquirir condicionamento físico, contamos com a ajuda do personal trainer Waldyr Maciel, da academia '+
        'Les Cinq Gym, que atende famosos como Bruno Gagliasso, Bruna Marquezine e Cláudia Raia. Ele reforça que um bom treino '+
        'para quem joga futebol é composto por exercícios que possibilitam o ganho de força, resistência, agilidade, velocidade, '+
        'explosão e equilíbrio. Vamos entender mais sobre cada um e, em seguida, acompanhar a planilha de treinos montada pelo Waldyr?'+
        '<br><br>Força:'+
        '<br>Exercícios de musculação: estes exercícios trabalham quadríceps, posterior de coxa, glúteos e panturrilhas, '+
        'músculos que são exigidos ao chutar, cabecear e correr. Exemplos:'+
        '<br>-Agachamento<br>-Cadeira extensora<br>-Afundo<br>-Levantamento terra<br>-Mesa flexora<br>-Stiff'+
        '<br>-Abdominais, pranchas e lombar para fortalecer o core, que trabalha a estabilização do movimento e previne algumas lesões'+
        '<br><br>Resistência e velocidade:'+
        '<br>-Treinos intervalados na esteira são ótimos para adaptar o corpo a suportar jogos longos rápidos, além de ajudar a ganhar velocidade.'+
        '<br><br>Equilíbrio e explosão:'+
        '<br>-Exercícios de propriocepção (capacidade de saber a posição de uma parte do corpo no espaço sem visualização) '+
        'que geram instabilidade ao corpo, desenvolvem também o equilíbrio. São executados com ajuda de aparelhos como balança '+
        'de equilíbrio, disco de equilíbrio, trampolim e bolas suíças.'+
        '<br>-Exercícios de deslocamentos entre cones, discos, saltos paralelos e unilaterais no box jump, deslocamentos e '+
        'saltos na escada de agilidade também são excelentes para obter mais explosão e trabalhar lateralidade e pliometria.'
                    
        textoTitulo2 = ""
        paragrafo2 = ""
        document.querySelector('#section2').setAttribute("style", "display: none;")
        document.querySelector('#titulo-cabecalho').setAttribute("style", "font-size: 180pt;")
    }

    if(escolha == "Treino Basquete"){
        imagem = "img/Basquete treino.jpg"
        textoTitulo1 = "11 exercícios básicos pro seu treino de basquete"
        paragrafo1 = '<br>Depois de aquecer, bora pro treino! Confira alguns exercícios de basquete para iniciantes que você pode fazer pra melhorar suas técnicas.'+
        '<br><br>Exercícios pra drible:'+
        '<br><br>1 – Driblar de um lado pro outro da quadra'+
        '<br>Comece posicionado na linha de fundo e vá quicando a bola até o outro lado da quadra, sem parar. Se quiser, também dá pra variar o ritmo, avançando mais rápido ou mais devagar.'+
        '<br><br>2 – Drible sem olhar pra bola'+
        '<br>Depois de dominar o anterior, tente repetir olhando pra frente. Saber driblar assim é fundamental pra uma boa noção de jogo, vendo a quadra e seus companheiros.'+
        '<br><br>3 – Pega-pega enquanto dribla'+
        '<br>Em duplas, um jogador deve driblar e escapar da marcação, enquanto o outro tenta roubar a bola. Quando ele conseguir, é só inverter as funções.'+
        '<br>Além deles, você também pode ver mais alguns dribles no basquete aqui no blog.'+
        '<br><br>Exercícios pra passe:'+
        '<br><br>4 – Passe de frente'+
        '<br>Em dupla, fique de frente pra outro jogador, com mais ou menos 3 m de distância. Passe e receba a bola, aumentando a distância conforme você se sentir mais confortável.'+
        '<br><br>5 – Passe lateral'+
        '<br>No mesmo esquema anterior, fique lado a lado com outro jogador pra treinar esse tipo de passe.'+
        '<br><br>6 – Passe em movimento'+
        '<br>Por fim, aumentando a dificuldade, movimentem-se em quadra enquanto passam e recebem a bola, sendo um exercício mais próximo da dinâmica de uma partida real.'+
        '<br>Quer fazer bons passes? Aproveite pra conferir os tipos de passe no basquete.'+
        '<br><br>Exercícios pra arremesso:'+
        '<br><br>7 – Exercício molde'+
        '<br>O molde de arremesso é a posição ideal pra acertar a cesta. Flexione o braço e segure a bola acima da cabeça com a ponta dos dedos, enquanto a outra mão fica do lado da bola, de apoio. O cotovelo da mão de arremesso deve estar abaixo da bola. Treine essa posição pra que ela se torne cada vez mais natural no seu jogo.'+
        '<br><br>8 – Treino de arremesso'+
        '<br>Depois de aprender a posição, treine os arremessos, caprichando na pontaria pra acertar na cesta. Com o tempo, você vai pegando o jeito e ficando cada vez mais preciso.'+
        '<br><br>9 – Arremesso com a mão de apoio'+
        '<br>Pra ter mais um recurso em caso de necessidade, inverta as posições das mãos e treine arremessos com a mão que antes era de apoio.'+
        '<br><br>10 – Arremesso com salto'+
        '<br>Na hora de arremessar, coordene com um pulo. Você deve arremessar a bola quando estiver no ponto mais alto.'+
        '<br><br>11 – Arremesso de lugares diferentes'+
        '<br>Pra fechar, treine todos os tipos de lugares diferentes da quadra, mais perto, mais longe, na linha de lance livre, dentro e fora do garrafão e atrás da linha de três pontos.'

        textoTitulo2 = ""
        paragrafo2 = ""
        document.querySelector('#section2').setAttribute("style", "display: none;")
        document.querySelector('#titulo-cabecalho').setAttribute("style", "font-size: 180pt;")
    }

    if(escolha == "Treino Futsal"){
        imagem = "img/Futsal.jpg"
        textoTitulo1 = "Treino especializado Futsal"
        
        paragrafo1 = 'Pontos a se focar para melhorar as habilidades gerais no Futsal'+
        '<br><br>-primeiro ciclo: domínio do corpo e habilidades básicas;'+
        '<br><br>-segundo ciclo: condução de bola e habilidades básicas;'+
        '<br><br>-terceiro ciclo: passe, recepção e drible;'+
        '<br><br>-quarto ciclo: sistemas de ataque e de defesa;'+
        '<br><br>-quinto ciclo: habilidades específicas de controle, condução e domínio de bola;'+
        '<br><br>-sexto ciclo: habilidades específicas de passe, recepção e finalização;'+
        '<br><br>-sétimo ciclo: habilidades específicas de cabeceio, drible e finta.'
                    
        paragrafo2 = ""
        textoTitulo2 = ""
        document.querySelector('#section2').setAttribute("style", "display: none;")
        document.querySelector('#titulo-cabecalho').setAttribute("style", "font-size: 180pt;")
    }

    /* imagem do cabeçalho */
    var imgConteudo = document.querySelector("#img-conteudo")
    imgConteudo.setAttribute("style", "display: inline;")
    imgConteudo.setAttribute("src", imagem)

    /* titulo do cabeçalho */
    var tituloCabecalho = document.querySelector("#titulo-cabecalho")
    tituloCabecalho.innerHTML = localStorage.getItem("conteudoEscolhido")


    /* section do conteudo */
    var conteudo = document.querySelector(".conteudo")
    conteudo.setAttribute("style", "display: block;")

    /* titulo conteudo */
    var titulo1 = document.querySelector("#titulo-conteudo1")
    titulo1.innerHTML = textoTitulo1
    var titulo2 = document.querySelector("#titulo-conteudo2")
    titulo2.innerHTML = textoTitulo2

    /* texto Conteudo */
    var texto1 = document.querySelector("#paragrafo1")
    texto1.innerHTML = paragrafo1
    texto1.setAttribute("style","width: 50%; margin: auto;")

    var texto2 = document.querySelector("#paragrafo2")
    texto2.innerHTML = paragrafo2
    texto2.setAttribute("style","width: 50%; margin: auto;")

}

