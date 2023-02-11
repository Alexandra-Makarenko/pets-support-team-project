import styled from 'styled-components';

export const ListItem = styled.li`
  height: 32px;
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const MyInfoSection = styled.section`
  background-color: #fff;
`;

export const FieldName = styled.span`
  display: inline-block;
  width: 107px;
`;

export const Value = styled.span`
  display: inline-block;
  width: 240px;
`;

export const UserPhoto = styled.img`
  border-radius: 50%;
`;

export const UserButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background-color: #fdf7f2;
`;

export const PetPhoto = styled.img`
  max-width: 161px;
  max-height: 161px;
`;
