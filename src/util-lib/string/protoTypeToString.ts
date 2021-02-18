import { com } from 'igtimi-js-proto';
import { titleCase } from './string.fns';
import { predicateNumber } from '../isType';
import { EntityNameProps } from '../../utilTypes/entity';

export function textFriendlyEntityType(type: com.yachtbot.Entity['entity']) {
    switch (type) {
        case 'genericObject':
            return 'Generic Objects';
        case 'boat':
            return 'Boats';
        case 'person':
            return 'People';
        case 'buoy':
            return 'Buoys';
        case 'helicopter':
            return 'Helicopters';
        case 'uav':
            return "UAV'S";
        case 'asset':
            return 'Assets';
        default:
            break;
    }
}

// export function textFriendlyBoatType(type: com.yachtbot.BoatType) {
//     // const t = com.yachtbot.BoatType[type];
//     switch (type) {
//         case com.yachtbot.BoatType.BoatType_Chase:
//             return 'Chase';
//         case com.yachtbot.BoatType.BoatType_Committee:
//             return 'Committee';
//         case com.yachtbot.BoatType.BoatType_Helper:
//             return 'Helper';
//         case com.yachtbot.BoatType.BoatType_MarkSet:
//             return 'Mark Set';
//         case com.yachtbot.BoatType.BoatType_Media:
//             return 'Media';
//         case com.yachtbot.BoatType.BoatType_Official:
//             return 'Official';
//         case com.yachtbot.BoatType.BoatType_Race:
//             return 'Race';
//         case com.yachtbot.BoatType.BoatType_Umpire:
//             return 'Umpire';
//         case com.yachtbot.BoatType.BoatType_Unknown:
//             return 'Unknown';
//         default:
//             return 'Unknown';
//     }
// }

export function camelCaseToTitleCase(in_camelCaseString: string) {
    const result = in_camelCaseString // "ToGetYourGEDInTimeASongAboutThe26ABCsIsOfTheEssenceButAPersonalIDCardForUser456InRoom26AContainingABC26TimesIsNotAsEasyAs123ForC3POOrR2D2Or2R2D"
        .replace(/([a-z])([A-Z][a-z])/g, '$1 $2') // "To Get YourGEDIn TimeASong About The26ABCs IsOf The Essence ButAPersonalIDCard For User456In Room26AContainingABC26Times IsNot AsEasy As123ForC3POOrR2D2Or2R2D"
        .replace(/([A-Z][a-z])([A-Z])/g, '$1 $2') // "To Get YourGEDIn TimeASong About The26ABCs Is Of The Essence ButAPersonalIDCard For User456In Room26AContainingABC26Times Is Not As Easy As123ForC3POOr R2D2Or2R2D"
        .replace(/([a-z])([A-Z]+[a-z])/g, '$1 $2') // "To Get Your GEDIn Time ASong About The26ABCs Is Of The Essence But APersonal IDCard For User456In Room26AContainingABC26Times Is Not As Easy As123ForC3POOr R2D2Or2R2D"
        .replace(/([A-Z]+)([A-Z][a-z][a-z])/g, '$1 $2') // "To Get Your GEDIn Time A Song About The26ABCs Is Of The Essence But A Personal ID Card For User456In Room26A ContainingABC26Times Is Not As Easy As123ForC3POOr R2D2Or2R2D"
        .replace(/([a-z]+)([A-Z0-9]+)/g, '$1 $2') // "To Get Your GEDIn Time A Song About The 26ABCs Is Of The Essence But A Personal ID Card For User 456In Room 26A Containing ABC26Times Is Not As Easy As 123For C3POOr R2D2Or 2R2D"

        // Note: the next regex includes a special case to exclude plurals of acronyms, e.g. "ABCs"
        .replace(/([A-Z]+)([A-Z][a-rt-z][a-z]*)/g, '$1 $2') // "To Get Your GED In Time A Song About The 26ABCs Is Of The Essence But A Personal ID Card For User 456In Room 26A Containing ABC26Times Is Not As Easy As 123For C3PO Or R2D2Or 2R2D"
        .replace(/([0-9])([A-Z][a-z]+)/g, '$1 $2') // "To Get Your GED In Time A Song About The 26ABCs Is Of The Essence But A Personal ID Card For User 456In Room 26A Containing ABC 26Times Is Not As Easy As 123For C3PO Or R2D2Or 2R2D"

        // Note: the next two regexes use {2,} instead of + to add space on phrases like Room26A and 26ABCs but not on phrases like R2D2 and C3PO"
        .replace(/([A-Z]{2,})([0-9]{2,})/g, '$1 $2') // "To Get Your GED In Time A Song About The 26ABCs Is Of The Essence But A Personal ID Card For User 456 In Room 26A Containing ABC 26 Times Is Not As Easy As 123 For C3PO Or R2D2 Or 2R2D"
        .replace(/([0-9]{2,})([A-Z]{2,})/g, '$1 $2') // "To Get Your GED In Time A Song About The 26 ABCs Is Of The Essence But A Personal ID Card For User 456 In Room 26A Containing ABC 26 Times Is Not As Easy As 123 For C3PO Or R2D2 Or 2R2D"
        .trim();

    // capitalize the first letter
    return result.charAt(0).toUpperCase() + result.slice(1);
}

export const getEntityName = (
    { entity, customEntryId, defaultName }: EntityNameProps,
    firstChoice: string | undefined,
): string => {
    const { name } = entity || {};
    return firstChoice ?? name ?? customEntryId ?? defaultName;
};

export const getRaceBoatName = (raceBoat: com.yachtbot.IBoat, fallback: string | undefined = undefined) => {
    return raceBoat.country ?? raceBoat.shortName ?? fallback;
};

// export const getPenaltyPunishmentName = (punishment?: com.yachtbot.Penalty.Punishment) => {
//     let penaltyPunishmentName = 'Unknown Penalty Punishment';
//     if (predicateNumber(punishment)) {
//         penaltyPunishmentName = titleCase(com.yachtbot.Penalty.Punishment[punishment]).split('_').join(' ');
//     }
//     return penaltyPunishmentName;
// };
