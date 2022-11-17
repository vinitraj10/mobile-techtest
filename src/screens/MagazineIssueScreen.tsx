import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import IssueContainer from '../components/IssueContainer';
import { fetchIssues } from '../store';
import { useApiData } from '../store/hooks';
import { IssueData } from '../store/types';

interface MagazineIssueScreenProps {}

const MagazineIssueScreen = (props: MagazineIssueScreenProps) => {

    const { data, error, isLoading } = useApiData<IssueData>(fetchIssues);
    console.log('data is', isLoading,error, data?.issues[0]?.issue)
    return (
        <SafeAreaView>
            <Text>MagazinIssueScreen</Text>
            <IssueContainer issues={data?.issues} isLoading={isLoading} error={error} />
        </SafeAreaView>
    );
}

export default MagazineIssueScreen;