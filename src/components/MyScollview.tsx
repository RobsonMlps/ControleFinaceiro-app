import type {PropsWithChildren, ReactElement} from "react";
import {styleSheet, useColorScheme} from "react-native";

import {ThemedView} from "@/components/themed-view";

const HEADER_HEIGHT = 250;

type Props = PropsWithChildren<{
    headerImage: ReactElement;
    headerBackgroundColor: {dark: string; light: string};
}>;

export function MyScrollView({
    headerImage,
    headerBackgroundColor,
    children,
}: Props) {
    const colorScheme = useColorScheme() ?? 'light';
    const scrollRef = useAnimatedRef<Animated.ScrollView>();
    