function novoAluno(alunoNome, alunoCurso, alunoSala){
    return{
        Nome: alunoNome,
        Curso: alunoCurso,
        Sala: alunoSala,
    }
}

var aluno01 = novoAluno("Renan Caxias", "Geografia", "Laboratório C");
console.log(aluno01.Nome + " - " + aluno01.Curso + " - " + aluno01.Sala);

var aluno02 = novoAluno("Vinícius Marin", "Programação", "Sala de informática");
console.log(aluno02.Nome + " - " + aluno02.Curso + " - " + aluno02.Sala);