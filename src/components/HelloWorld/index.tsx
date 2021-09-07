import * as S from './styles';

const HelloWorld = ({ title }: { title: string }) => (
  <S.Container>
    <S.Title>{title}</S.Title>
  </S.Container>
);

export default HelloWorld;
