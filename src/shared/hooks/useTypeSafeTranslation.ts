import type { TranslationKeys } from "#/generated/translationKeys";
import { useI18n } from "vue-i18n";

const useTypeSafeTranslation = () => {
  const { t } = useI18n();

  return {
    t: (s: TranslationKeys) => t(s),
  };
};

export default useTypeSafeTranslation;
