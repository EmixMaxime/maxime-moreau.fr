<?php

namespace Emix\Lang;

class Lang
{
    private $cookieLang;
	private $httpAcceptLang;

	private $supportedLanguages;
	private $defaultLang;

	private $browserLang;
	private $lang;

    public function __construct(?String $cookieLang, ?String $httpAcceptLang, array $supportedLanguages, String $defaultLang)
    {
        $this->cookieLang = $cookieLang;
		$this->httpAcceptLang = $httpAcceptLang;

		$this->supportedLanguages = $supportedLanguages;
		$this->defaultLang = $defaultLang;

		$this->browserLang = $this->getBrowserLang();
	}
	
	private function getBrowserLang(): ?String
	{
		$supportedLanguages = array_flip($this->supportedLanguages);

		$langs = [];
		preg_match_all(
			'~([\w-]+)(?:[^,\d]+([\d.]+))?~',
			strtolower($this->httpAcceptLang),
			$matches,
			PREG_SET_ORDER
		);

		foreach($matches as $match) {
			list($a, $b) = explode('-', $match[1]) + array('', '');
			$value = isset($match[2]) ? (float) $match[2] : 1.0;

			if(isset($supportedLanguages[$match[1]])) {
				$langs[$match[1]] = $value;
				continue;
			}

			if(isset($supportedLanguages[$a])) {
				$langs[$a] = $value - 0.1;
			}
		}

		if($langs) {
			arsort($langs);
			return key($langs); // We don't need the whole array of choices since we have a match
		}

		return null;
	}

    private function determine(): String
    {
		if ($this->cookieLang && in_array($this->cookieLang, $this->supportedLanguages)) {
			return $this->cookieLang;
		}

		if ($this->browserLang && in_array($this->browserLang, $this->supportedLanguages)) {
			return $this->browserLang;
		}

		return $this->defaultLang;
    }

    public function getLang(): String
    {
		if (!$this->lang) {
			$this->lang = $this->determine();
		}

		return $this->lang;
    }
}
