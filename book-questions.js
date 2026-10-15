import { BOOK, BOOK_UNITS } from './book.js';
import { INTRO_QUESTIONS, INTRO_COVERAGE } from './book-question-chunks/intro.js';
import { LANES_QUESTIONS, LANES_COVERAGE } from './book-question-chunks/lanes.js';
import { PRIORITY_22_25_QUESTIONS, PRIORITY_22_25_COVERAGE } from './book-question-chunks/priority-22-25.js';
import { PRIORITY_26_29_QUESTIONS, PRIORITY_26_29_COVERAGE } from './book-question-chunks/priority-26-29.js';
import { PRIORITY_30_33_QUESTIONS, PRIORITY_30_33_COVERAGE } from './book-question-chunks/priority-30-33.js';
import { PRIORITY_34_37_QUESTIONS, PRIORITY_34_37_COVERAGE } from './book-question-chunks/priority-34-37.js';
import { PRIORITY_38_41_QUESTIONS, PRIORITY_38_41_COVERAGE } from './book-question-chunks/priority-38-41.js';
import { PRIORITY_42_45_QUESTIONS, PRIORITY_42_45_COVERAGE } from './book-question-chunks/priority-42-45.js';
import { CROSSINGS_46_49_QUESTIONS, CROSSINGS_46_49_COVERAGE } from './book-question-chunks/crossings-46-49.js';
import { CROSSINGS_50_53_QUESTIONS, CROSSINGS_50_53_COVERAGE } from './book-question-chunks/crossings-50-53.js';
import { CROSSINGS_54_57_QUESTIONS, CROSSINGS_54_57_COVERAGE } from './book-question-chunks/crossings-54-57.js';
import { ROUNDABOUTS_58_61_QUESTIONS, ROUNDABOUTS_58_61_COVERAGE } from './book-question-chunks/roundabouts-58-61.js';
import { ROUNDABOUTS_62_67_QUESTIONS, ROUNDABOUTS_62_67_COVERAGE } from './book-question-chunks/roundabouts-62-67.js';
import { PARKING_68_69_QUESTIONS, PARKING_68_69_COVERAGE } from './book-question-chunks/parking-68-69.js';
import { PARKING_70_71_QUESTIONS, PARKING_70_71_COVERAGE } from './book-question-chunks/parking-70-71.js';
import { PARKING_72_77_QUESTIONS, PARKING_72_77_COVERAGE } from './book-question-chunks/parking-72-77.js';
import { COUNTRY_78_81_QUESTIONS, COUNTRY_78_81_COVERAGE } from './book-question-chunks/country-78-81.js';
import { COUNTRY_82_85_QUESTIONS, COUNTRY_82_85_COVERAGE } from './book-question-chunks/country-82-85.js';
import { COUNTRY_86_89_QUESTIONS, COUNTRY_86_89_COVERAGE } from './book-question-chunks/country-86-89.js';
import { MOTORWAY_90_93_QUESTIONS, MOTORWAY_90_93_COVERAGE } from './book-question-chunks/motorway-90-93.js';
import { MOTORWAY_94_97_QUESTIONS, MOTORWAY_94_97_COVERAGE } from './book-question-chunks/motorway-94-97.js';
import { OVERTAKING_98_99_QUESTIONS, OVERTAKING_98_99_COVERAGE } from './book-question-chunks/overtaking-98-99.js';
import { OVERTAKING_100_101_QUESTIONS, OVERTAKING_100_101_COVERAGE } from './book-question-chunks/overtaking-100-101.js';
import { OVERTAKING_102_107_QUESTIONS, OVERTAKING_102_107_COVERAGE } from './book-question-chunks/overtaking-102-107.js';
import { RAILWAY_108_111_QUESTIONS, RAILWAY_108_111_COVERAGE } from './book-question-chunks/railway-108-111.js';
import { RAILWAY_112_115_QUESTIONS, RAILWAY_112_115_COVERAGE } from './book-question-chunks/railway-112-115.js';
import { SPECIAL_STREETS_116_119_QUESTIONS, SPECIAL_STREETS_116_119_COVERAGE } from './book-question-chunks/special-streets-116-119.js';
import { SPECIAL_STREETS_120_123_QUESTIONS, SPECIAL_STREETS_120_123_COVERAGE } from './book-question-chunks/special-streets-120-123.js';
import { WINTER_124_131_QUESTIONS, WINTER_124_131_COVERAGE } from './book-question-chunks/winter-124-131.js';
import { LEARNING_132_139_QUESTIONS, LEARNING_132_139_COVERAGE } from './book-question-chunks/learning-132-139.js';
import { ALCOHOL_140_147_QUESTIONS, ALCOHOL_140_147_COVERAGE } from './book-question-chunks/alcohol-140-147.js';
import { FATIGUE_148_153_QUESTIONS, FATIGUE_148_153_COVERAGE } from './book-question-chunks/fatigue-148-153.js';
import { VISION_154_161_QUESTIONS, VISION_154_161_COVERAGE } from './book-question-chunks/vision-154-161.js';
import { CAPACITY_162_167_QUESTIONS, CAPACITY_162_167_COVERAGE } from './book-question-chunks/capacity-162-167.js';
import { CHILDREN_168_173_QUESTIONS, CHILDREN_168_173_COVERAGE } from './book-question-chunks/children-168-173.js';
import { ACCIDENTS_174_180_QUESTIONS, ACCIDENTS_174_180_COVERAGE } from './book-question-chunks/accidents-174-180.js';
import { ACCIDENTS_181_187_QUESTIONS, ACCIDENTS_181_187_COVERAGE } from './book-question-chunks/accidents-181-187.js';
import { VEHICLE_TYPES_188_195_QUESTIONS, VEHICLE_TYPES_188_195_COVERAGE } from './book-question-chunks/vehicle-types-188-195.js';
import { DISTANCES_196_203_QUESTIONS, DISTANCES_196_203_COVERAGE } from './book-question-chunks/distances-196-203.js';
import { TYRES_204_213_QUESTIONS, TYRES_204_213_COVERAGE } from './book-question-chunks/tyres-204-213.js';
import { STEERING_214_223_QUESTIONS, STEERING_214_223_COVERAGE } from './book-question-chunks/steering-214-223.js';
import { BRAKES_224_231_QUESTIONS, BRAKES_224_231_COVERAGE } from './book-question-chunks/brakes-224-231.js';
import { CRASH_PROTECTION_232_237_QUESTIONS, CRASH_PROTECTION_232_237_COVERAGE } from './book-question-chunks/crash-protection-232-237.js';
import { CHILD_SEATS_238_243_QUESTIONS, CHILD_SEATS_238_243_COVERAGE } from './book-question-chunks/child-seats-238-243.js';
import { DIMENSIONS_244_251_QUESTIONS, DIMENSIONS_244_251_COVERAGE } from './book-question-chunks/dimensions-244-251.js';
import { LOAD_252_261_QUESTIONS, LOAD_252_261_COVERAGE } from './book-question-chunks/load-252-261.js';
import { LIGHTS_262_271_QUESTIONS, LIGHTS_262_271_COVERAGE } from './book-question-chunks/lights-262-271.js';
import { SAFETY_CHECK_272_277_QUESTIONS, SAFETY_CHECK_272_277_COVERAGE } from './book-question-chunks/safety-check-272-277.js';
import { INSPECTION_278_283_QUESTIONS, INSPECTION_278_283_COVERAGE } from './book-question-chunks/inspection-278-283.js';
import { SERVICE_284_289_QUESTIONS, SERVICE_284_289_COVERAGE } from './book-question-chunks/service-284-289.js';
import { REGISTRATION_290_297_QUESTIONS, REGISTRATION_290_297_COVERAGE } from './book-question-chunks/registration-290-297.js';
import { INSURANCE_298_303_QUESTIONS, INSURANCE_298_303_COVERAGE } from './book-question-chunks/insurance-298-303.js';
import { ENVIRONMENT_304_311_QUESTIONS, ENVIRONMENT_304_311_COVERAGE } from './book-question-chunks/environment-304-311.js';
import { ECO_DRIVING_312_317_QUESTIONS, ECO_DRIVING_312_317_COVERAGE } from './book-question-chunks/eco-driving-312-317.js';
import { FUELS_318_323_QUESTIONS, FUELS_318_323_COVERAGE } from './book-question-chunks/fuels-318-323.js';
import { SIGNS_324_331_QUESTIONS, SIGNS_324_331_COVERAGE } from './book-question-chunks/signs-324-331.js';
import { SIGNS_332_339_QUESTIONS, SIGNS_332_339_COVERAGE } from './book-question-chunks/signs-332-339.js';
import { SIGNS_340_347_QUESTIONS, SIGNS_340_347_COVERAGE } from './book-question-chunks/signs-340-347.js';
import { SIGNS_348_355_QUESTIONS, SIGNS_348_355_COVERAGE } from './book-question-chunks/signs-348-355.js';
import { SIGNS_356_361_QUESTIONS, SIGNS_356_361_COVERAGE } from './book-question-chunks/signs-356-361.js';
import { CASES_362_366_QUESTIONS, CASES_362_366_COVERAGE } from './book-question-chunks/cases-362-366.js';

const unitOrder = new Map(BOOK_UNITS.map((unit, index) => [unit.id, index]));
const pageOrder = (a, b) => unitOrder.get(a.bookUnitId) - unitOrder.get(b.bookUnitId)
  || Math.min(...a.bookPages) - Math.min(...b.bookPages);

// Order is stable within a PDF page. The ordered game works through unseen items
// before returning to the ordinary spaced-repetition scheduler.
export const BOOK_QUESTIONS = [
  ...INTRO_QUESTIONS, ...LANES_QUESTIONS, ...PRIORITY_22_25_QUESTIONS, ...PRIORITY_26_29_QUESTIONS,
  ...PRIORITY_30_33_QUESTIONS, ...PRIORITY_34_37_QUESTIONS, ...PRIORITY_38_41_QUESTIONS,
  ...PRIORITY_42_45_QUESTIONS, ...CROSSINGS_46_49_QUESTIONS, ...CROSSINGS_50_53_QUESTIONS,
  ...CROSSINGS_54_57_QUESTIONS, ...ROUNDABOUTS_58_61_QUESTIONS, ...ROUNDABOUTS_62_67_QUESTIONS,
  ...PARKING_68_69_QUESTIONS, ...PARKING_70_71_QUESTIONS, ...PARKING_72_77_QUESTIONS,
  ...COUNTRY_78_81_QUESTIONS, ...COUNTRY_82_85_QUESTIONS, ...COUNTRY_86_89_QUESTIONS,
  ...MOTORWAY_90_93_QUESTIONS, ...MOTORWAY_94_97_QUESTIONS, ...OVERTAKING_98_99_QUESTIONS,
  ...OVERTAKING_100_101_QUESTIONS, ...OVERTAKING_102_107_QUESTIONS, ...RAILWAY_108_111_QUESTIONS,
  ...RAILWAY_112_115_QUESTIONS, ...SPECIAL_STREETS_116_119_QUESTIONS, ...SPECIAL_STREETS_120_123_QUESTIONS,
  ...WINTER_124_131_QUESTIONS, ...LEARNING_132_139_QUESTIONS, ...ALCOHOL_140_147_QUESTIONS,
  ...FATIGUE_148_153_QUESTIONS, ...VISION_154_161_QUESTIONS, ...CAPACITY_162_167_QUESTIONS,
  ...CHILDREN_168_173_QUESTIONS, ...ACCIDENTS_174_180_QUESTIONS, ...ACCIDENTS_181_187_QUESTIONS,
  ...VEHICLE_TYPES_188_195_QUESTIONS, ...DISTANCES_196_203_QUESTIONS, ...TYRES_204_213_QUESTIONS,
  ...STEERING_214_223_QUESTIONS, ...BRAKES_224_231_QUESTIONS, ...CRASH_PROTECTION_232_237_QUESTIONS,
  ...CHILD_SEATS_238_243_QUESTIONS, ...DIMENSIONS_244_251_QUESTIONS, ...LOAD_252_261_QUESTIONS,
  ...LIGHTS_262_271_QUESTIONS, ...SAFETY_CHECK_272_277_QUESTIONS, ...INSPECTION_278_283_QUESTIONS,
  ...SERVICE_284_289_QUESTIONS, ...REGISTRATION_290_297_QUESTIONS, ...INSURANCE_298_303_QUESTIONS,
  ...ENVIRONMENT_304_311_QUESTIONS, ...ECO_DRIVING_312_317_QUESTIONS, ...FUELS_318_323_QUESTIONS,
  ...SIGNS_324_331_QUESTIONS,
  ...SIGNS_332_339_QUESTIONS,
  ...SIGNS_340_347_QUESTIONS,
  ...SIGNS_348_355_QUESTIONS,
  ...SIGNS_356_361_QUESTIONS,
  ...CASES_362_366_QUESTIONS,
].sort(pageOrder);
export const BOOK_COVERAGE = [
  ...INTRO_COVERAGE, ...LANES_COVERAGE, ...PRIORITY_22_25_COVERAGE, ...PRIORITY_26_29_COVERAGE,
  ...PRIORITY_30_33_COVERAGE, ...PRIORITY_34_37_COVERAGE, ...PRIORITY_38_41_COVERAGE,
  ...PRIORITY_42_45_COVERAGE, ...CROSSINGS_46_49_COVERAGE, ...CROSSINGS_50_53_COVERAGE,
  ...CROSSINGS_54_57_COVERAGE, ...ROUNDABOUTS_58_61_COVERAGE, ...ROUNDABOUTS_62_67_COVERAGE,
  ...PARKING_68_69_COVERAGE, ...PARKING_70_71_COVERAGE, ...PARKING_72_77_COVERAGE,
  ...COUNTRY_78_81_COVERAGE, ...COUNTRY_82_85_COVERAGE, ...COUNTRY_86_89_COVERAGE,
  ...MOTORWAY_90_93_COVERAGE, ...MOTORWAY_94_97_COVERAGE, ...OVERTAKING_98_99_COVERAGE,
  ...OVERTAKING_100_101_COVERAGE, ...OVERTAKING_102_107_COVERAGE, ...RAILWAY_108_111_COVERAGE,
  ...RAILWAY_112_115_COVERAGE, ...SPECIAL_STREETS_116_119_COVERAGE, ...SPECIAL_STREETS_120_123_COVERAGE,
  ...WINTER_124_131_COVERAGE, ...LEARNING_132_139_COVERAGE, ...ALCOHOL_140_147_COVERAGE,
  ...FATIGUE_148_153_COVERAGE, ...VISION_154_161_COVERAGE, ...CAPACITY_162_167_COVERAGE,
  ...CHILDREN_168_173_COVERAGE, ...ACCIDENTS_174_180_COVERAGE, ...ACCIDENTS_181_187_COVERAGE,
  ...VEHICLE_TYPES_188_195_COVERAGE, ...DISTANCES_196_203_COVERAGE, ...TYRES_204_213_COVERAGE,
  ...STEERING_214_223_COVERAGE, ...BRAKES_224_231_COVERAGE, ...CRASH_PROTECTION_232_237_COVERAGE,
  ...CHILD_SEATS_238_243_COVERAGE, ...DIMENSIONS_244_251_COVERAGE, ...LOAD_252_261_COVERAGE,
  ...LIGHTS_262_271_COVERAGE, ...SAFETY_CHECK_272_277_COVERAGE, ...INSPECTION_278_283_COVERAGE,
  ...SERVICE_284_289_COVERAGE, ...REGISTRATION_290_297_COVERAGE, ...INSURANCE_298_303_COVERAGE,
  ...ENVIRONMENT_304_311_COVERAGE, ...ECO_DRIVING_312_317_COVERAGE, ...FUELS_318_323_COVERAGE,
  ...SIGNS_324_331_COVERAGE,
  ...SIGNS_332_339_COVERAGE,
  ...SIGNS_340_347_COVERAGE,
  ...SIGNS_348_355_COVERAGE,
  ...SIGNS_356_361_COVERAGE,
  ...CASES_362_366_COVERAGE,
];

// Review ranges are independent of reading units, so a long unit can be saved
// in several smaller chunks without hiding its unconverted pages.
export const BOOK_CHUNKS = [
  { id: 'intro', bookUnitId: 'book-intro', startPage: 5, endPage: 13,
    file: 'book-question-chunks/intro.js', reviewedOn: '2026-10-14',
    questionIds: INTRO_QUESTIONS.map(q => q.id) },
  { id: 'lanes', bookUnitId: 'book-lanes', startPage: 14, endPage: 21,
    file: 'book-question-chunks/lanes.js', reviewedOn: '2026-10-14',
    questionIds: LANES_QUESTIONS.map(q => q.id) },
  { id: 'priority-22-25', bookUnitId: 'book-priority', startPage: 22, endPage: 25,
    file: 'book-question-chunks/priority-22-25.js', reviewedOn: '2026-10-14',
    questionIds: PRIORITY_22_25_QUESTIONS.map(q => q.id) },
  { id: 'priority-26-29', bookUnitId: 'book-priority', startPage: 26, endPage: 29,
    file: 'book-question-chunks/priority-26-29.js', reviewedOn: '2026-10-14',
    questionIds: PRIORITY_26_29_QUESTIONS.map(q => q.id) },
  { id: 'priority-30-33', bookUnitId: 'book-priority', startPage: 30, endPage: 33,
    file: 'book-question-chunks/priority-30-33.js', reviewedOn: '2026-10-14',
    questionIds: PRIORITY_30_33_QUESTIONS.map(q => q.id) },
  { id: 'priority-34-37', bookUnitId: 'book-priority', startPage: 34, endPage: 37,
    file: 'book-question-chunks/priority-34-37.js', reviewedOn: '2026-10-14',
    questionIds: PRIORITY_34_37_QUESTIONS.map(q => q.id) },
  { id: 'priority-38-41', bookUnitId: 'book-priority', startPage: 38, endPage: 41,
    file: 'book-question-chunks/priority-38-41.js', reviewedOn: '2026-10-14',
    questionIds: PRIORITY_38_41_QUESTIONS.map(q => q.id) },
  { id: 'priority-42-45', bookUnitId: 'book-priority', startPage: 42, endPage: 45,
    file: 'book-question-chunks/priority-42-45.js', reviewedOn: '2026-10-14',
    questionIds: PRIORITY_42_45_QUESTIONS.map(q => q.id) },
  { id: 'crossings-46-49', bookUnitId: 'book-crossings', startPage: 46, endPage: 49,
    file: 'book-question-chunks/crossings-46-49.js', reviewedOn: '2026-10-14',
    questionIds: CROSSINGS_46_49_QUESTIONS.map(q => q.id) },
  { id: 'crossings-50-53', bookUnitId: 'book-crossings', startPage: 50, endPage: 53,
    file: 'book-question-chunks/crossings-50-53.js', reviewedOn: '2026-10-14',
    questionIds: CROSSINGS_50_53_QUESTIONS.map(q => q.id) },
  { id: 'crossings-54-57', bookUnitId: 'book-crossings', startPage: 54, endPage: 57,
    file: 'book-question-chunks/crossings-54-57.js', reviewedOn: '2026-10-14',
    questionIds: CROSSINGS_54_57_QUESTIONS.map(q => q.id) },
  { id: 'roundabouts-58-61', bookUnitId: 'book-roundabouts', startPage: 58, endPage: 61,
    file: 'book-question-chunks/roundabouts-58-61.js', reviewedOn: '2026-10-14',
    questionIds: ROUNDABOUTS_58_61_QUESTIONS.map(q => q.id) },
  { id: 'roundabouts-62-67', bookUnitId: 'book-roundabouts', startPage: 62, endPage: 67,
    file: 'book-question-chunks/roundabouts-62-67.js', reviewedOn: '2026-10-14',
    questionIds: ROUNDABOUTS_62_67_QUESTIONS.map(q => q.id) },
  { id: 'parking-68-69', bookUnitId: 'book-parking', startPage: 68, endPage: 69,
    file: 'book-question-chunks/parking-68-69.js', reviewedOn: '2026-10-14',
    questionIds: PARKING_68_69_QUESTIONS.map(q => q.id) },
  { id: 'parking-70-71', bookUnitId: 'book-parking', startPage: 70, endPage: 71,
    file: 'book-question-chunks/parking-70-71.js', reviewedOn: '2026-10-14',
    questionIds: PARKING_70_71_QUESTIONS.map(q => q.id) },
  { id: 'parking-72-77', bookUnitId: 'book-parking', startPage: 72, endPage: 77,
    file: 'book-question-chunks/parking-72-77.js', reviewedOn: '2026-10-14',
    questionIds: PARKING_72_77_QUESTIONS.map(q => q.id) },
  { id: 'country-78-81', bookUnitId: 'book-country', startPage: 78, endPage: 81,
    file: 'book-question-chunks/country-78-81.js', reviewedOn: '2026-10-14',
    questionIds: COUNTRY_78_81_QUESTIONS.map(q => q.id) },
  { id: 'country-82-85', bookUnitId: 'book-country', startPage: 82, endPage: 85,
    file: 'book-question-chunks/country-82-85.js', reviewedOn: '2026-10-14',
    questionIds: COUNTRY_82_85_QUESTIONS.map(q => q.id) },
  { id: 'country-86-89', bookUnitId: 'book-country', startPage: 86, endPage: 89,
    file: 'book-question-chunks/country-86-89.js', reviewedOn: '2026-10-14',
    questionIds: COUNTRY_86_89_QUESTIONS.map(q => q.id) },
  { id: 'motorway-90-93', bookUnitId: 'book-motorway', startPage: 90, endPage: 93,
    file: 'book-question-chunks/motorway-90-93.js', reviewedOn: '2026-10-14',
    questionIds: MOTORWAY_90_93_QUESTIONS.map(q => q.id) },
  { id: 'motorway-94-97', bookUnitId: 'book-motorway', startPage: 94, endPage: 97,
    file: 'book-question-chunks/motorway-94-97.js', reviewedOn: '2026-10-14',
    questionIds: MOTORWAY_94_97_QUESTIONS.map(q => q.id) },
  { id: 'overtaking-98-99', bookUnitId: 'book-overtaking', startPage: 98, endPage: 99,
    file: 'book-question-chunks/overtaking-98-99.js', reviewedOn: '2026-10-14',
    questionIds: OVERTAKING_98_99_QUESTIONS.map(q => q.id) },
  { id: 'overtaking-100-101', bookUnitId: 'book-overtaking', startPage: 100, endPage: 101,
    file: 'book-question-chunks/overtaking-100-101.js', reviewedOn: '2026-10-14',
    questionIds: OVERTAKING_100_101_QUESTIONS.map(q => q.id) },
  { id: 'overtaking-102-107', bookUnitId: 'book-overtaking', startPage: 102, endPage: 107,
    file: 'book-question-chunks/overtaking-102-107.js', reviewedOn: '2026-10-14',
    questionIds: OVERTAKING_102_107_QUESTIONS.map(q => q.id) },
  { id: 'railway-108-111', bookUnitId: 'book-railway', startPage: 108, endPage: 111,
    file: 'book-question-chunks/railway-108-111.js', reviewedOn: '2026-10-14',
    questionIds: RAILWAY_108_111_QUESTIONS.map(q => q.id) },
  { id: 'railway-112-115', bookUnitId: 'book-railway', startPage: 112, endPage: 115,
    file: 'book-question-chunks/railway-112-115.js', reviewedOn: '2026-10-14',
    questionIds: RAILWAY_112_115_QUESTIONS.map(q => q.id) },
  { id: 'special-streets-116-119', bookUnitId: 'book-special-streets', startPage: 116, endPage: 119,
    file: 'book-question-chunks/special-streets-116-119.js', reviewedOn: '2026-10-14',
    questionIds: SPECIAL_STREETS_116_119_QUESTIONS.map(q => q.id) },
  { id: 'special-streets-120-123', bookUnitId: 'book-special-streets', startPage: 120, endPage: 123,
    file: 'book-question-chunks/special-streets-120-123.js', reviewedOn: '2026-10-14',
    questionIds: SPECIAL_STREETS_120_123_QUESTIONS.map(q => q.id) },
  { id: 'winter-124-131', bookUnitId: 'book-winter', startPage: 124, endPage: 131,
    file: 'book-question-chunks/winter-124-131.js', reviewedOn: '2026-10-14',
    questionIds: WINTER_124_131_QUESTIONS.map(q => q.id) },
  { id: 'learning-132-139', bookUnitId: 'book-learning', startPage: 132, endPage: 139,
    file: 'book-question-chunks/learning-132-139.js', reviewedOn: '2026-10-14',
    questionIds: LEARNING_132_139_QUESTIONS.map(q => q.id) },
  { id: 'alcohol-140-147', bookUnitId: 'book-alcohol', startPage: 140, endPage: 147,
    file: 'book-question-chunks/alcohol-140-147.js', reviewedOn: '2026-10-14',
    questionIds: ALCOHOL_140_147_QUESTIONS.map(q => q.id) },
  { id: 'fatigue-148-153', bookUnitId: 'book-fatigue', startPage: 148, endPage: 153,
    file: 'book-question-chunks/fatigue-148-153.js', reviewedOn: '2026-10-14',
    questionIds: FATIGUE_148_153_QUESTIONS.map(q => q.id) },
  { id: 'vision-154-161', bookUnitId: 'book-vision', startPage: 154, endPage: 161,
    file: 'book-question-chunks/vision-154-161.js', reviewedOn: '2026-10-14',
    questionIds: VISION_154_161_QUESTIONS.map(q => q.id) },
  { id: 'capacity-162-167', bookUnitId: 'book-capacity', startPage: 162, endPage: 167,
    file: 'book-question-chunks/capacity-162-167.js', reviewedOn: '2026-10-14',
    questionIds: CAPACITY_162_167_QUESTIONS.map(q => q.id) },
  { id: 'children-168-173', bookUnitId: 'book-children', startPage: 168, endPage: 173,
    file: 'book-question-chunks/children-168-173.js', reviewedOn: '2026-10-14',
    questionIds: CHILDREN_168_173_QUESTIONS.map(q => q.id) },
  { id: 'accidents-174-180', bookUnitId: 'book-accidents', startPage: 174, endPage: 180,
    file: 'book-question-chunks/accidents-174-180.js', reviewedOn: '2026-10-14',
    questionIds: ACCIDENTS_174_180_QUESTIONS.map(q => q.id) },
  { id: 'accidents-181-187', bookUnitId: 'book-accidents', startPage: 181, endPage: 187,
    file: 'book-question-chunks/accidents-181-187.js', reviewedOn: '2026-10-14',
    questionIds: ACCIDENTS_181_187_QUESTIONS.map(q => q.id) },
  { id: 'vehicle-types-188-195', bookUnitId: 'book-vehicle-types', startPage: 188, endPage: 195,
    file: 'book-question-chunks/vehicle-types-188-195.js', reviewedOn: '2026-10-14',
    questionIds: VEHICLE_TYPES_188_195_QUESTIONS.map(q => q.id) },
  { id: 'distances-196-203', bookUnitId: 'book-distances', startPage: 196, endPage: 203,
    file: 'book-question-chunks/distances-196-203.js', reviewedOn: '2026-10-14',
    questionIds: DISTANCES_196_203_QUESTIONS.map(q => q.id) },
  { id: 'tyres-204-213', bookUnitId: 'book-tyres', startPage: 204, endPage: 213,
    file: 'book-question-chunks/tyres-204-213.js', reviewedOn: '2026-10-14',
    questionIds: TYRES_204_213_QUESTIONS.map(q => q.id) },
  { id: 'steering-214-223', bookUnitId: 'book-steering', startPage: 214, endPage: 223,
    file: 'book-question-chunks/steering-214-223.js', reviewedOn: '2026-10-14',
    questionIds: STEERING_214_223_QUESTIONS.map(q => q.id) },
  { id: 'brakes-224-231', bookUnitId: 'book-brakes', startPage: 224, endPage: 231,
    file: 'book-question-chunks/brakes-224-231.js', reviewedOn: '2026-10-14',
    questionIds: BRAKES_224_231_QUESTIONS.map(q => q.id) },
  { id: 'crash-protection-232-237', bookUnitId: 'book-crash-protection', startPage: 232, endPage: 237,
    file: 'book-question-chunks/crash-protection-232-237.js', reviewedOn: '2026-10-14',
    questionIds: CRASH_PROTECTION_232_237_QUESTIONS.map(q => q.id) },
  { id: 'child-seats-238-243', bookUnitId: 'book-child-seats', startPage: 238, endPage: 243,
    file: 'book-question-chunks/child-seats-238-243.js', reviewedOn: '2026-10-14',
    questionIds: CHILD_SEATS_238_243_QUESTIONS.map(q => q.id) },
  { id: 'dimensions-244-251', bookUnitId: 'book-dimensions', startPage: 244, endPage: 251,
    file: 'book-question-chunks/dimensions-244-251.js', reviewedOn: '2026-10-14',
    questionIds: DIMENSIONS_244_251_QUESTIONS.map(q => q.id) },
  { id: 'load-252-261', bookUnitId: 'book-load', startPage: 252, endPage: 261,
    file: 'book-question-chunks/load-252-261.js', reviewedOn: '2026-10-14',
    questionIds: LOAD_252_261_QUESTIONS.map(q => q.id) },
  { id: 'lights-262-271', bookUnitId: 'book-lights', startPage: 262, endPage: 271,
    file: 'book-question-chunks/lights-262-271.js', reviewedOn: '2026-10-14',
    questionIds: LIGHTS_262_271_QUESTIONS.map(q => q.id) },
  { id: 'safety-check-272-277', bookUnitId: 'book-safety-check', startPage: 272, endPage: 277,
    file: 'book-question-chunks/safety-check-272-277.js', reviewedOn: '2026-10-14',
    questionIds: SAFETY_CHECK_272_277_QUESTIONS.map(q => q.id) },
  { id: 'inspection-278-283', bookUnitId: 'book-inspection', startPage: 278, endPage: 283,
    file: 'book-question-chunks/inspection-278-283.js', reviewedOn: '2026-10-14',
    questionIds: INSPECTION_278_283_QUESTIONS.map(q => q.id) },
  { id: 'service-284-289', bookUnitId: 'book-service', startPage: 284, endPage: 289,
    file: 'book-question-chunks/service-284-289.js', reviewedOn: '2026-10-14',
    questionIds: SERVICE_284_289_QUESTIONS.map(q => q.id) },
  { id: 'registration-290-297', bookUnitId: 'book-registration', startPage: 290, endPage: 297,
    file: 'book-question-chunks/registration-290-297.js', reviewedOn: '2026-10-14',
    questionIds: REGISTRATION_290_297_QUESTIONS.map(q => q.id) },
  { id: 'insurance-298-303', bookUnitId: 'book-insurance', startPage: 298, endPage: 303,
    file: 'book-question-chunks/insurance-298-303.js', reviewedOn: '2026-10-14',
    questionIds: INSURANCE_298_303_QUESTIONS.map(q => q.id) },
  { id: 'environment-304-311', bookUnitId: 'book-environment', startPage: 304, endPage: 311,
    file: 'book-question-chunks/environment-304-311.js', reviewedOn: '2026-10-14',
    questionIds: ENVIRONMENT_304_311_QUESTIONS.map(q => q.id) },
  { id: 'eco-driving-312-317', bookUnitId: 'book-eco-driving', startPage: 312, endPage: 317,
    file: 'book-question-chunks/eco-driving-312-317.js', reviewedOn: '2026-10-14',
    questionIds: ECO_DRIVING_312_317_QUESTIONS.map(q => q.id) },
  { id: 'fuels-318-323', bookUnitId: 'book-fuels', startPage: 318, endPage: 323,
    file: 'book-question-chunks/fuels-318-323.js', reviewedOn: '2026-10-14',
    questionIds: FUELS_318_323_QUESTIONS.map(q => q.id) },
  { id: 'signs-324-331', bookUnitId: 'book-signs', startPage: 324, endPage: 331,
    file: 'book-question-chunks/signs-324-331.js', reviewedOn: '2026-10-14',
    questionIds: SIGNS_324_331_QUESTIONS.map(q => q.id) },
  { id: 'signs-332-339', bookUnitId: 'book-signs', startPage: 332, endPage: 339,
    file: 'book-question-chunks/signs-332-339.js', reviewedOn: '2026-10-14',
    questionIds: SIGNS_332_339_QUESTIONS.map(q => q.id) },
  { id: 'signs-340-347', bookUnitId: 'book-signs', startPage: 340, endPage: 347,
    file: 'book-question-chunks/signs-340-347.js', reviewedOn: '2026-10-14',
    questionIds: SIGNS_340_347_QUESTIONS.map(q => q.id) },
  { id: 'signs-348-355', bookUnitId: 'book-signs', startPage: 348, endPage: 355,
    file: 'book-question-chunks/signs-348-355.js', reviewedOn: '2026-10-14',
    questionIds: SIGNS_348_355_QUESTIONS.map(q => q.id) },
  { id: 'signs-356-361', bookUnitId: 'book-signs', startPage: 356, endPage: 361,
    file: 'book-question-chunks/signs-356-361.js', reviewedOn: '2026-10-14',
    questionIds: SIGNS_356_361_QUESTIONS.map(q => q.id) },
  { id: 'cases-362-366', bookUnitId: 'book-cases', startPage: 362, endPage: 366,
    file: 'book-question-chunks/cases-362-366.js', reviewedOn: '2026-10-14',
    questionIds: CASES_362_366_QUESTIONS.map(q => q.id) },
];

export const BOOK_SOURCE = {
  title: `${BOOK.title}, ${BOOK.publisher}`,
  url: BOOK.url,
  checkedOn: '2026-10-14',
  locator: 'PDF-sidnummer räknade från omslaget; bokbaserade pedagogiska utkast',
};
