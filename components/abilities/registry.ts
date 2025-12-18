import type { ComponentType } from "react";
// archetypes
// arc 2
// strategist
import TheChessGameOfLife2 from "./archetypes/arc2/strategist/the-chess-game-of-life";
import MyBodyIsMyMachine2 from "./archetypes/arc2/strategist/my-body-is-my-machine";
import VillainousIntellect2 from "./archetypes/arc2/strategist/villainous-intellect";
import ThirstForKnowledge2 from "./archetypes/arc2/strategist/thirst-for-knowledge";
// engineer
import TheLifeOfTheMind2 from "./archetypes/arc2/engineer/the-life-of-the-mind";
import MysteriesOfTheMachines2 from "./archetypes/arc2/engineer/mysteries-of-the-machines";
import CuriousAndOriginal2 from "./archetypes/arc2/engineer/curious-and-original";
import OpenMinded2 from "./archetypes/arc2/engineer/open-minded";
// commander
import AWorthyChallenge2 from "./archetypes/arc2/commander/a-worthy-challenge";
import StriveForGreatness2 from "./archetypes/arc2/commander/strive-for-greatness";
import EfficiencyIsKing2 from "./archetypes/arc2/commander/efficiency-is-king";
import SacrificialPawn2 from "./archetypes/arc2/commander/sacrificial-pawn";
// visionary
import RapidOriginality2 from "./archetypes/arc2/visionary/rapid-originality";
import QuestionEverything2 from "./archetypes/arc2/visionary/question-everything";
import ContrarianCharisma2 from "./archetypes/arc2/visionary/contrarian-charisma";
import ExpertBrainstormer2 from "./archetypes/arc2/visionary/expert-brainstormer";
// advocate
import SeekingPurpose2 from "./archetypes/arc2/advocate/seeking-purpose";
import APersonalMission2 from "./archetypes/arc2/advocate/a-personal-mission";
import ConnectingWithOthers2 from "./archetypes/arc2/advocate/connecting-with-others";
import PrincipledPerfectionism2 from "./archetypes/arc2/advocate/principled-perfectionism";
// idealist
import InSearchOfACalling2 from "./archetypes/arc2/idealist/in-search-of-a-calling";
import OpenHeart2 from "./archetypes/arc2/idealist/open-heart";
import SpeakingTheirTruth2 from "./archetypes/arc2/idealist/speaking-their-truth";
import Empathize2 from "./archetypes/arc2/idealist/empathize";
// leader
import LeadTheWay2 from "./archetypes/arc2/leader/lead-the-way";
import IntenseAndReceptive2 from "./archetypes/arc2/leader/intense-and-receptive";
import SpeakingUpForWhatsRight2 from "./archetypes/arc2/leader/speaking-up-for-whats-right";
import GettingInvolved2 from "./archetypes/arc2/leader/getting-involved";
// dreamer
import TheMagicOfEverydayLife2 from "./archetypes/arc2/dreamer/the-magic-of-everyday-life";
import BurstOfEnthusiasm2 from "./archetypes/arc2/dreamer/burst-of-enthusiasm";
import PeoplePleaser2 from "./archetypes/arc2/dreamer/people-pleaser";
import EmotionallyPerceptive2 from "./archetypes/arc2/dreamer/emotionally-perceptive";
// logistician
import DutifulServantOfTheKing2 from "./archetypes/arc2/logistician/dutiful-servant-of-the-king";
import ByTheBookIsPractical2 from "./archetypes/arc2/logistician/by-the-book-is-practical";
import StructureAndOrder2 from "./archetypes/arc2/logistician/structure-and-order";
import PickingUpTheSlack2 from "./archetypes/arc2/logistician/picking-up-the-slack";
// logistician
import ShowingUp2 from "./archetypes/arc2/defender/showing-up";
import TheGiftOfLoyalty2 from "./archetypes/arc2/defender/the-gift-of-loyalty";
import TheHighestStandard2 from "./archetypes/arc2/defender/the-highest-standard";
import HumbleDedication2 from "./archetypes/arc2/defender/humble-dedication";
// executive
import LeadByExample2 from "./archetypes/arc2/executive/lead-by-example";
import HereAreTheFacts2 from "./archetypes/arc2/executive/here-are-the-facts";
import AGreaterResponsibility2 from "./archetypes/arc2/executive/a-greater-responsibility";
import ClimbTheLadder2 from "./archetypes/arc2/executive/climb-the-ladder";
// consul
import RelationshipsThatLast2 from "./archetypes/arc2/consul/relationships-that-last";
import ItsTheLittleThings2 from "./archetypes/arc2/consul/its-the-little-things";
import HostAGathering2 from "./archetypes/arc2/consul/host-a-gathering";
import LivingForConnection2 from "./archetypes/arc2/consul/living-for-connection";
// virtuoso
import PersonalProject2 from "./archetypes/arc2/virtuoso/personal-project";
import DefyingTheRules2 from "./archetypes/arc2/virtuoso/defying-the-rules";
import DareToDiffer2 from "./archetypes/arc2/virtuoso/dare-to-differ";
import AllFairPlay2 from "./archetypes/arc2/virtuoso/all-fair-play";
// artist
import ManyPassions2 from "./archetypes/arc2/artist/many-passions";
import PainToRage2 from "./archetypes/arc2/artist/pain-to-rage";
import Overwhelmed2 from "./archetypes/arc2/artist/overwhelmed";
import ReadEmotions2 from "./archetypes/arc2/artist/read-emotions";
// adventurer
import DiveRightIn2 from "./archetypes/arc2/adventurer/dive-right-in";
import CallThemOut2 from "./archetypes/arc2/adventurer/call-them-out";
import Socialite2 from "./archetypes/arc2/adventurer/socialite";
import ThePathLessTraveled2 from "./archetypes/arc2/adventurer/the-path-less-traveled";
// entertainer
import ASpontaneousSpirit2 from "./archetypes/arc2/entertainer/a-spontaneous-spirit";
import SituationalAwareness2 from "./archetypes/arc2/entertainer/situational-awareness";
import LivingWithPassion2 from "./archetypes/arc2/entertainer/living-with-passion";
import AvoidConflict2 from "./archetypes/arc2/entertainer/avoid-conflict";
// arc 1
// strategist
import TheChessGameOfLife1 from "./archetypes/arc1/strategist/the-chess-game-of-life";
import MyBodyIsMyMachine1 from "./archetypes/arc1/strategist/my-body-is-my-machine";
import VillainousIntellect1 from "./archetypes/arc1/strategist/villainous-intellect";
import ThirstForKnowledge1 from "./archetypes/arc1/strategist/thirst-for-knowledge";
// engineer
import TheLifeOfTheMind1 from "./archetypes/arc1/engineer/the-life-of-the-mind";
import MysteriesOfTheMachines1 from "./archetypes/arc1/engineer/mysteries-of-the-machines";
import CuriousAndOriginal1 from "./archetypes/arc1/engineer/curious-and-original";
import OpenMinded1 from "./archetypes/arc1/engineer/open-minded";
// commander
import AWorthyChallenge1 from "./archetypes/arc1/commander/a-worthy-challenge";
import StriveForGreatness1 from "./archetypes/arc1/commander/strive-for-greatness";
import EfficiencyIsKing1 from "./archetypes/arc1/commander/efficiency-is-king";
import SacrificialPawn1 from "./archetypes/arc1/commander/sacrificial-pawn";
// visionary
import RapidOriginality1 from "./archetypes/arc1/visionary/rapid-originality";
import QuestionEverything1 from "./archetypes/arc1/visionary/question-everything";
import ContrarianCharisma1 from "./archetypes/arc1/visionary/contrarian-charisma";
import ExpertBrainstormer1 from "./archetypes/arc1/visionary/expert-brainstormer";
// advocate
import SeekingPurpose1 from "./archetypes/arc1/advocate/seeking-purpose";
import APersonalMission1 from "./archetypes/arc1/advocate/a-personal-mission";
import ConnectingWithOthers1 from "./archetypes/arc1/advocate/connecting-with-others";
import PrincipledPerfectionism1 from "./archetypes/arc1/advocate/principled-perfectionism";
// idealist
import InSearchOfACalling1 from "./archetypes/arc1/idealist/in-search-of-a-calling";
import OpenHeart1 from "./archetypes/arc1/idealist/open-heart";
import SpeakingTheirTruth1 from "./archetypes/arc1/idealist/speaking-their-truth";
import Empathize1 from "./archetypes/arc1/idealist/empathize";
// leader
import LeadTheWay1 from "./archetypes/arc1/leader/lead-the-way";
import IntenseAndReceptive1 from "./archetypes/arc1/leader/intense-and-receptive";
import SpeakingUpForWhatsRight1 from "./archetypes/arc1/leader/speaking-up-for-whats-right";
import GettingInvolved1 from "./archetypes/arc1/leader/getting-involved";
// dreamer
import TheMagicOfEverydayLife1 from "./archetypes/arc1/dreamer/the-magic-of-everyday-life";
import BurstOfEnthusiasm1 from "./archetypes/arc1/dreamer/burst-of-enthusiasm";
import PeoplePleaser1 from "./archetypes/arc1/dreamer/people-pleaser";
import EmotionallyPerceptive1 from "./archetypes/arc1/dreamer/emotionally-perceptive";
// logistician
import DutifulServantOfTheKing1 from "./archetypes/arc1/logistician/dutiful-servant-of-the-king";
import ByTheBookIsPractical1 from "./archetypes/arc1/logistician/by-the-book-is-practical";
import StructureAndOrder1 from "./archetypes/arc1/logistician/structure-and-order";
import PickingUpTheSlack1 from "./archetypes/arc1/logistician/picking-up-the-slack";
// logistician
import ShowingUp1 from "./archetypes/arc1/defender/showing-up";
import TheGiftOfLoyalty1 from "./archetypes/arc1/defender/the-gift-of-loyalty";
import TheHighestStandard1 from "./archetypes/arc1/defender/the-highest-standard";
import HumbleDedication1 from "./archetypes/arc1/defender/humble-dedication";
// executive
import LeadByExample1 from "./archetypes/arc1/executive/lead-by-example";
import HereAreTheFacts1 from "./archetypes/arc1/executive/here-are-the-facts";
import AGreaterResponsibility1 from "./archetypes/arc1/executive/a-greater-responsibility";
import ClimbTheLadder1 from "./archetypes/arc1/executive/climb-the-ladder";
// consul
import RelationshipsThatLast1 from "./archetypes/arc1/consul/relationships-that-last";
import ItsTheLittleThings1 from "./archetypes/arc1/consul/its-the-little-things";
import HostAGathering1 from "./archetypes/arc1/consul/host-a-gathering";
import LivingForConnection1 from "./archetypes/arc1/consul/living-for-connection";
// virtuoso
import PersonalProject1 from "./archetypes/arc1/virtuoso/personal-project";
import DefyingTheRules1 from "./archetypes/arc1/virtuoso/defying-the-rules";
import DareToDiffer1 from "./archetypes/arc1/virtuoso/dare-to-differ";
import AllFairPlay1 from "./archetypes/arc1/virtuoso/all-fair-play";
// artist
import ManyPassions1 from "./archetypes/arc1/artist/many-passions";
import PainToRage1 from "./archetypes/arc1/artist/pain-to-rage";
import Overwhelmed1 from "./archetypes/arc1/artist/overwhelmed";
import ReadEmotions1 from "./archetypes/arc1/artist/read-emotions";
// adventurer
import DiveRightIn1 from "./archetypes/arc1/adventurer/dive-right-in";
import CallThemOut1 from "./archetypes/arc1/adventurer/call-them-out";
import Socialite1 from "./archetypes/arc1/adventurer/socialite";
import ThePathLessTraveled1 from "./archetypes/arc1/adventurer/the-path-less-traveled";
// entertainer
import ASpontaneousSpirit1 from "./archetypes/arc1/entertainer/a-spontaneous-spirit";
import SituationalAwareness1 from "./archetypes/arc1/entertainer/situational-awareness";
import LivingWithPassion1 from "./archetypes/arc1/entertainer/living-with-passion";
import AvoidConflict1 from "./archetypes/arc1/entertainer/avoid-conflict";

// operatives
// arc2
// canon
import Overkill from "./operatives/arc2/canon/overkill";
import WarmupRoutine from "./operatives/arc2/canon/warmup-routine";
import JustOneMoreShot from "./operatives/arc2/canon/just-one-more-shot";
import WarningShots from "./operatives/arc2/canon/warning-shots";
import Obliterate from "./operatives/arc2/canon/obliterate";
// close
import Revivify from "./operatives/arc2/close/revivify";
import PreemptiveRelease from "./operatives/arc2/close/preemptive-release";
import AllIn from "./operatives/arc2/close/all-in";
import PreciseControl from "./operatives/arc2/close/precise-control";
import Resurrect from "./operatives/arc2/close/resurrect";
// facility
import HeavyHauler from "./operatives/arc2/facility/heavy-hauler";
import IntoTheFray from "./operatives/arc2/facility/into-the-fray";
import ControlledLaunch from "./operatives/arc2/facility/controlled-launch";
import Unstoppable from "./operatives/arc2/facility/unstoppable";
import OversizedWeaponry from "./operatives/arc2/facility/oversized-weaponry";
// hush
import Vaporwave from "./operatives/arc2/hush/vaporwave";
import Shadowstep from "./operatives/arc2/hush/shadowstep";
import MidnightSilence from "./operatives/arc2/hush/midnight-silence";
import ShadowSynthesis from "./operatives/arc2/hush/shadow-synthesis";
import SensoryEclipse from "./operatives/arc2/hush/sensory-eclipse";
// impact
import ToughItOut from "./operatives/arc2/impact/tough-it-out";
import HurtMeOnce from "./operatives/arc2/impact/hurt-me-once";
import MaximumEffort from "./operatives/arc2/impact/maximum-effort";
import Indominable from "./operatives/arc2/impact/indominable";
import UnlockPotential from "./operatives/arc2/impact/unlock-potential";
// keeper
import Simulate from "./operatives/arc2/keeper/simulate";
import NoRiskNoReward from "./operatives/arc2/keeper/no-risk-no-reward";
import Teamwork from "./operatives/arc2/keeper/teamwork";
import NeuralOverclock from "./operatives/arc2/keeper/neural-overclock";
import RealityFracture from "./operatives/arc2/keeper/reality-fracture";
// notion
import Ravager from "./operatives/arc2/notion/ravager";
import Devourer from "./operatives/arc2/notion/devourer";
import NightTerrors from "./operatives/arc2/notion/night-terrors";
import BeastWithin from "./operatives/arc2/notion/beast-within";
import Warform from "./operatives/arc2/notion/warform";
// quill
import Potential from "./operatives/arc2/quill/potential";
import AccelleratedAutodidact from "./operatives/arc2/quill/accellerated-autodidact";
import Mimicry from "./operatives/arc2/quill/mimicry";
import RelentlessRegimen from "./operatives/arc2/quill/relentless-regimen";
import MaxPotential from "./operatives/arc2/quill/max-potential";
// severance
import ImpulseProjection from "./operatives/arc2/severance/impulse-projection";
import Marionette from "./operatives/arc2/severance/marionette";
import Sympathy from "./operatives/arc2/severance/sympathy";
import Assimilate from "./operatives/arc2/severance/assimilate";
import Empathy from "./operatives/arc2/severance/empathy";
// watchtower
import SawItComing from "./operatives/arc2/watchtower/saw-it-coming";
import GiveMeTheFuckingCamera from "./operatives/arc2/watchtower/give-me-the-fucking-camera";
import AttackDogs from "./operatives/arc2/watchtower/attack-dogs";
import MissionControlTellCorporateTheyCanShoveIt from "./operatives/arc2/watchtower/mission-control-tell-corporate-they-can-shove-it";
import ContractEscalation from "./operatives/arc2/watchtower/contract-escalation";

// fighting styles
// arc2
// backsnap
import RecklessMindset from "./fighting-styles/arc2/backsnap/reckless-mindset";
import ImmediateBrutality from "./fighting-styles/arc2/backsnap/immediate-brutality";
import BloodyCounter from "./fighting-styles/arc2/backsnap/bloody-counter";
import ReapersSurge from "./fighting-styles/arc2/backsnap/reapers-surge";
import UnstoppableBS from "./fighting-styles/arc2/backsnap/unstoppable";
// bleedout
import Skirmish from "./fighting-styles/arc2/bleedout/skirmish";
import DebilitatingStrikes from "./fighting-styles/arc2/bleedout/debilitating-strikes";
import PredatoryFocus from "./fighting-styles/arc2/bleedout/predatory-focus";
import CombatCanny from "./fighting-styles/arc2/bleedout/combat-canny";
import DeceiversSurge from "./fighting-styles/arc2/bleedout/deceivers-surge";
// throatgore
import PackTactics from "./fighting-styles/arc2/throatgore/pack-tactics";
import CoordinatedAssault from "./fighting-styles/arc2/throatgore/coordinated-assault";
import FatalOpening from "./fighting-styles/arc2/throatgore/fatal-opening";
import IsolatingCounter from "./fighting-styles/arc2/throatgore/isolating-counter";
import FatalFinisher from "./fighting-styles/arc2/throatgore/fatal-finisher";
// crowdbreaking
import BasicWeaponsTraining from "./fighting-styles/arc2/crowdbreaking/basic-weapons-training";
import Cascade from "./fighting-styles/arc2/crowdbreaking/cascade";
import FollowThrough from "./fighting-styles/arc2/crowdbreaking/follow-through";
import ClearAPath from "./fighting-styles/arc2/crowdbreaking/clear-a-path";
import MuscularSurge from "./fighting-styles/arc2/crowdbreaking/muscular-surge";
// mirado
import CombatAwareness from "./fighting-styles/arc2/mirado/combat-awareness";
import CombatInstinct from "./fighting-styles/arc2/mirado/combat-instinct";
import ThirdEye from "./fighting-styles/arc2/mirado/third-eye";
import SixEdgedIntersection from "./fighting-styles/arc2/mirado/six-edged-intersection";
import MiradoSurge from "./fighting-styles/arc2/mirado/mirado-surge";
// lotarlin
import CutTheWater from "./fighting-styles/arc2/lotarlin/cut-the-water";
import Permeate from "./fighting-styles/arc2/lotarlin/permeate";
import CutTheSky from "./fighting-styles/arc2/lotarlin/cut-the-sky";
import RipplesReturn from "./fighting-styles/arc2/lotarlin/ripples-return";
import FlowingSurge from "./fighting-styles/arc2/lotarlin/flowing-surge";
// donums
// arc2
// leo
import DonumLeo from "./donums/arc2/donum-leo/donum-leo";
import GlimpseOfPrey from "./donums/arc2/donum-leo/glimpse-of-prey";
import PredatorsRest from "./donums/arc2/donum-leo/predators-rest";
import WeaponsOfTheLion from "./donums/arc2/donum-leo/weapons-of-the-lion";
import SturdyHide from "./donums/arc2/donum-leo/sturdy-hide";
import SkillfulShiftingLeo from "./donums/arc2/donum-leo/skillful-shifting";
import GrandAppetiteLeo from "./donums/arc2/donum-leo/grand-appetite";
// portentum
// lars
import DonumPortentumLars from "./donums/arc2/donum-portentum/donum-portentum-lars";
import KeenScent from "./donums/arc2/donum-portentum/keen-scent";
import FlamesPulse from "./donums/arc2/donum-portentum/flames-pulse";
import WeaponsOfTheBoar from "./donums/arc2/donum-portentum/weapons-of-the-boar";
import SturdyHideLars from "./donums/arc2/donum-portentum/sturdy-hide";
import UrgentShifting from "./donums/arc2/donum-portentum/urgent-shifting";
import DemiIjeta from "./donums/arc2/donum-portentum/demi-ijeta";

export type AbilityRegistryType = {
  [category: string]: {
    [arc: string]: {
      [type: string]: {
        [slug: string]: ComponentType<unknown>;
      };
    };
  };
};

export const abilityRegistry = {
  archetypes: {
    arc1: {
      strategist: {
        "the-chess-game-of-life": TheChessGameOfLife1,
        "my-body-is-my-machine": MyBodyIsMyMachine1,
        "villainous-intellect": VillainousIntellect1,
        "thirst-for-knowledge": ThirstForKnowledge1,
      },
      engineer: {
        "the-life-of-the-mind": TheLifeOfTheMind1,
        "mysteries-of-the-machines": MysteriesOfTheMachines1,
        "curious-and-original": CuriousAndOriginal1,
        "open-minded": OpenMinded1,
      },
      commander: {
        "a-worthy-challenge": AWorthyChallenge1,
        "strive-for-greatness": StriveForGreatness1,
        "efficiency-is-king": EfficiencyIsKing1,
        "sacrificial-pawn": SacrificialPawn1,
      },
      visionary: {
        "rapid-originality": RapidOriginality1,
        "question-everything": QuestionEverything1,
        "contrarian-charisma": ContrarianCharisma1,
        "expert-brainstormer": ExpertBrainstormer1,
      },
      advocate: {
        "seeking-purpose": SeekingPurpose1,
        "a-personal-mission": APersonalMission1,
        "connecting-with-others": ConnectingWithOthers1,
        "principled-perfectionism": PrincipledPerfectionism1,
      },
      idealist: {
        "in-search-of-a-calling": InSearchOfACalling1,
        "open-heart": OpenHeart1,
        "speaking-their-truth": SpeakingTheirTruth1,
        empathize: Empathize1,
      },
      leader: {
        "lead-the-way": LeadTheWay1,
        "intense-and-receptive": IntenseAndReceptive1,
        "speaking-up-for-whats-right": SpeakingUpForWhatsRight1,
        "getting-involved": GettingInvolved1,
      },
      dreamer: {
        "the-magic-of-everyday-life": TheMagicOfEverydayLife1,
        "burst-of-enthusiasm": BurstOfEnthusiasm1,
        "people-pleaser": PeoplePleaser1,
        "emotionally-perceptive": EmotionallyPerceptive1,
      },
      logistician: {
        "dutiful-servant-of-the-king": DutifulServantOfTheKing1,
        "by-the-book-is-practical": ByTheBookIsPractical1,
        "structure-and-order": StructureAndOrder1,
        "picking-up-the-slack": PickingUpTheSlack1,
      },
      defender: {
        "showing-up": ShowingUp1,
        "the-gift-of-loyalty": TheGiftOfLoyalty1,
        "the-highest-standard": TheHighestStandard1,
        "humble-dedication": HumbleDedication1,
      },
      executive: {
        "lead-by-example": LeadByExample1,
        "here-are-the-facts": HereAreTheFacts1,
        "a-greater-responsibility": AGreaterResponsibility1,
        "climb-the-ladder": ClimbTheLadder1,
      },
      consul: {
        "relationships-that-last": RelationshipsThatLast1,
        "its-the-little-things": ItsTheLittleThings1,
        "host-a-gathering": HostAGathering1,
        "living-for-connection": LivingForConnection1,
      },
      virtuoso: {
        "personal-project": PersonalProject1,
        "defying-the-rules": DefyingTheRules1,
        "dare-to-differ": DareToDiffer1,
        "all-fair-play": AllFairPlay1,
      },
      artist: {
        "many-passions": ManyPassions1,
        "pain-to-rage": PainToRage1,
        overwhelmed: Overwhelmed1,
        "read-emotions": ReadEmotions1,
      },
      adventurer: {
        "dive-right-in": DiveRightIn1,
        "call-them-out": CallThemOut1,
        socialite: Socialite1,
        "the-path-less-traveled": ThePathLessTraveled1,
      },
      entertainer: {
        "a-spontaneous-spirit": ASpontaneousSpirit1,
        "situational-awareness": SituationalAwareness1,
        "living-with-passion": LivingWithPassion1,
        "avoid-conflict": AvoidConflict1,
      },
    },
    arc2: {
      strategist: {
        "the-chess-game-of-life": TheChessGameOfLife2,
        "my-body-is-my-machine": MyBodyIsMyMachine2,
        "villainous-intellect": VillainousIntellect2,
        "thirst-for-knowledge": ThirstForKnowledge2,
      },
      engineer: {
        "the-life-of-the-mind": TheLifeOfTheMind2,
        "mysteries-of-the-machines": MysteriesOfTheMachines2,
        "curious-and-original": CuriousAndOriginal2,
        "open-minded": OpenMinded2,
      },
      commander: {
        "a-worthy-challenge": AWorthyChallenge2,
        "strive-for-greatness": StriveForGreatness2,
        "efficiency-is-king": EfficiencyIsKing2,
        "sacrificial-pawn": SacrificialPawn2,
      },
      visionary: {
        "rapid-originality": RapidOriginality2,
        "question-everything": QuestionEverything2,
        "contrarian-charisma": ContrarianCharisma2,
        "expert-brainstormer": ExpertBrainstormer2,
      },
      advocate: {
        "seeking-purpose": SeekingPurpose2,
        "a-personal-mission": APersonalMission2,
        "connecting-with-others": ConnectingWithOthers2,
        "principled-perfectionism": PrincipledPerfectionism2,
      },
      idealist: {
        "in-search-of-a-calling": InSearchOfACalling2,
        "open-heart": OpenHeart2,
        "speaking-their-truth": SpeakingTheirTruth2,
        empathize: Empathize2,
      },
      leader: {
        "lead-the-way": LeadTheWay2,
        "intense-and-receptive": IntenseAndReceptive2,
        "speaking-up-for-whats-right": SpeakingUpForWhatsRight2,
        "getting-involved": GettingInvolved2,
      },
      dreamer: {
        "the-magic-of-everyday-life": TheMagicOfEverydayLife2,
        "burst-of-enthusiasm": BurstOfEnthusiasm2,
        "people-pleaser": PeoplePleaser2,
        "emotionally-perceptive": EmotionallyPerceptive2,
      },
      logistician: {
        "dutiful-servant-of-the-king": DutifulServantOfTheKing2,
        "by-the-book-is-practical": ByTheBookIsPractical2,
        "structure-and-order": StructureAndOrder2,
        "picking-up-the-slack": PickingUpTheSlack2,
      },
      defender: {
        "showing-up": ShowingUp2,
        "the-gift-of-loyalty": TheGiftOfLoyalty2,
        "the-highest-standard": TheHighestStandard2,
        "humble-dedication": HumbleDedication2,
      },
      executive: {
        "lead-by-example": LeadByExample2,
        "here-are-the-facts": HereAreTheFacts2,
        "a-greater-responsibility": AGreaterResponsibility2,
        "climb-the-ladder": ClimbTheLadder2,
      },
      consul: {
        "relationships-that-last": RelationshipsThatLast2,
        "its-the-little-things": ItsTheLittleThings2,
        "host-a-gathering": HostAGathering2,
        "living-for-connection": LivingForConnection2,
      },
      virtuoso: {
        "personal-project": PersonalProject2,
        "defying-the-rules": DefyingTheRules2,
        "dare-to-differ": DareToDiffer2,
        "all-fair-play": AllFairPlay2,
      },
      artist: {
        "many-passions": ManyPassions2,
        "pain-to-rage": PainToRage2,
        overwhelmed: Overwhelmed2,
        "read-emotions": ReadEmotions2,
      },
      adventurer: {
        "dive-right-in": DiveRightIn2,
        "call-them-out": CallThemOut2,
        socialite: Socialite2,
        "the-path-less-traveled": ThePathLessTraveled2,
      },
      entertainer: {
        "a-spontaneous-spirit": ASpontaneousSpirit2,
        "situational-awareness": SituationalAwareness2,
        "living-with-passion": LivingWithPassion2,
        "avoid-conflict": AvoidConflict2,
      },
    },
  },
  operatives: {
    arc2: {
      canon: {
        overkill: Overkill,
        "warmup-routine": WarmupRoutine,
        "just-one-more-shot": JustOneMoreShot,
        "warning-shots": WarningShots,
        obliterate: Obliterate,
      },
      close: {
        revivify: Revivify,
        "preemptive-release": PreemptiveRelease,
        "all-in": AllIn,
        "precise-control": PreciseControl,
        resurrect: Resurrect,
      },
      facility: {
        "heavy-hauler": HeavyHauler,
        "into-the-fray": IntoTheFray,
        "controlled-launch": ControlledLaunch,
        unstoppable: Unstoppable,
        "oversized-weaponry": OversizedWeaponry,
      },
      hush: {
        vaporwave: Vaporwave,
        shadowstep: Shadowstep,
        "midnight-silence": MidnightSilence,
        "shadow-synthesis": ShadowSynthesis,
        "sensory-eclipse": SensoryEclipse,
      },
      impact: {
        "tough-it-out": ToughItOut,
        "hurt-me-once": HurtMeOnce,
        "maximum-effort": MaximumEffort,
        indominable: Indominable,
        "unlock-potential": UnlockPotential,
      },
      keeper: {
        simulate: Simulate,
        "no-risk-no-reward": NoRiskNoReward,
        teamwork: Teamwork,
        "neural-overclock": NeuralOverclock,
        "reality-fracture": RealityFracture,
      },
      notion: {
        ravager: Ravager,
        devourer: Devourer,
        "night-terrors": NightTerrors,
        "beast-within": BeastWithin,
        warform: Warform,
      },
      quill: {
        potential: Potential,
        "accellerated-autodidact": AccelleratedAutodidact,
        mimicry: Mimicry,
        "relentless-regimen": RelentlessRegimen,
        "max-potential": MaxPotential,
      },
      severance: {
        "impulse-projection": ImpulseProjection,
        marionette: Marionette,
        sympathy: Sympathy,
        assimilate: Assimilate,
        empathy: Empathy,
      },
      watchtower: {
        "saw-it-coming": SawItComing,
        "give-me-the-fucking-camera": GiveMeTheFuckingCamera,
        "attack-dogs": AttackDogs,
        "mission-control-tell-corporate-they-can-shove-it":
          MissionControlTellCorporateTheyCanShoveIt,
        "contract-escalation": ContractEscalation,
      },
    },
  },
  fightingStyles: {
    arc2: {
      backsnap: {
        "reckless-mindset": RecklessMindset,
        "immediate-brutality": ImmediateBrutality,
        "bloody-counter": BloodyCounter,
        "reapers-surge": ReapersSurge,
        unstoppable: UnstoppableBS,
      },
      bleedout: {
        skirmish: Skirmish,
        "debilitating-strikes": DebilitatingStrikes,
        "predatory-focus": PredatoryFocus,
        "combat-canny": CombatCanny,
        "deceivers-surge": DeceiversSurge,
      },
      crowdbreaking: {
        "basic-weapons-training": BasicWeaponsTraining,
        "clear-a-path": ClearAPath,
        "muscular-surge": MuscularSurge,
        cascade: Cascade,
        "follow-through": FollowThrough,
      },
      mirado: {
        "combat-awareness": CombatAwareness,
        "combat-instinct": CombatInstinct,
        "third-eye": ThirdEye,
        "six-edged-intersection": SixEdgedIntersection,
        "mirado-surge": MiradoSurge,
      },
      throatgore: {
        "pack-tactics": PackTactics,
        "coordinated-assault": CoordinatedAssault,
        "fatal-opening": FatalOpening,
        "isolating-counter": IsolatingCounter,
        "fatal-finisher": FatalFinisher,
      },
      lotarlin: {
        "cut-the-water": CutTheWater,
        permeate: Permeate,
        "cut-the-sky": CutTheSky,
        "ripples-return": RipplesReturn,
        "flowing-surge": FlowingSurge,
      },
    },
  },
  donums: {
    arc2: {
      "donum-leo": {
        "donum-leo": DonumLeo,
        "glimpse-of-prey": GlimpseOfPrey,
        "predators-rest": PredatorsRest,
        "weapons-of-the-lion": WeaponsOfTheLion,
        "sturdy-hide": SturdyHide,
        "skillful-shifting": SkillfulShiftingLeo,
        "grand-appetite": GrandAppetiteLeo,
      },
      "donum-portentum": {
        "donum-portentum-lars": DonumPortentumLars,
        "keen-scent": KeenScent,
        "flames-pulse": FlamesPulse,
        "weapons-of-the-boar": WeaponsOfTheBoar,
        "sturdy-hide": SturdyHideLars,
        "urgent-shifting": UrgentShifting,
        "demi-ijeta": DemiIjeta,
      },
    },
  },
} as AbilityRegistryType;
