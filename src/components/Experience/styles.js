import { Timeline, TimelineEvent } from 'react-event-timeline';
import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 100px;
`;

export const Title = styled.p`
  color: #606060;
  font-size: 2rem;
  font-weight: 100;
`;

export const TimeLineContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 3rem;
`

export const TimeLineComponent = styled(Timeline)`
  padding: 20px;
`

export const TimeLineEventComponent = styled(TimelineEvent)`
  width: 500px;
  box-shadow:  7px 7px 8px #606060,
  -7px -7px 8px #eee;
  padding: 20px 10px;

`

export const Header = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`

export const ContentTitle = styled.p`
  font-size: 14px;
`

export const Labels = styled.div`
  border-radius: 20px;
  background: #e0e0e0;

  padding: 2px 6px;
  width: 100px;
  margin: 4px;
`

export const LabelsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 4px;
  margin-top: 1rem;
`