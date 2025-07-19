import React from 'react';
import { Text, HStack, Button } from "@chakra-ui/react";
import HighlightsCard from '../../../../components/Card/Highlights/highlightsCard';
import mock from './mock';

import './index.scss';

const namespace = 'app-highlights';

const Highlights = ({ title = 'This weeks specials!', btnTitle = 'Online Menu' }) => {
    return(<section className={namespace}>
        <HStack
          bg="white"
          spacing={4}
          align="center"
          justify="space-between"
          className={`${namespace}__header`}
        >
          <Text pl={5} as="h2" fontSize="48px" color="black">{title}</Text>
          <Button
            bg="#F4CE14"
            color="black"
            _hover={{ bg: "#F4CE14" }}
            borderRadius="md"
            className={`${namespace}__button`}
          >
            {btnTitle}
          </Button>
        </HStack>

        <div className={`${namespace}__container`}>
          {mock.map((key, i) => <HighlightsCard key={i} {...key} />)}
        </div>
      </section>)
};

export default Highlights;
