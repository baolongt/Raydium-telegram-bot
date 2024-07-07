import { InlineKeyboardMarkup } from "telegraf/typings/core/types/typegram";

export const generateButtons = ({
    hasNextPage,
    hasPreviousPage,
}: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}): InlineKeyboardMarkup => {
    const buttons = [];
    if (hasPreviousPage) {
        buttons.push({
            text: "Previous",
            callback_data: "previous",
        });
    }
    if (hasNextPage) {
        buttons.push({
            text: "Next",
            callback_data: "next",
        });
    }
    return {
        inline_keyboard: [
            buttons
        ],
    };
}
