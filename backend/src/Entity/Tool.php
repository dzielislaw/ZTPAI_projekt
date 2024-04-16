<?php

namespace App\Entity;

use App\Repository\ToolRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ToolRepository::class)]
class Tool
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 6, scale: 2)]
    private ?string $price = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $imgPath = null;

    #[ORM\ManyToOne(fetch: 'EAGER', inversedBy: 'tools')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Producer $producer = null;

    #[ORM\ManyToMany(targetEntity: Category::class, inversedBy: 'tools')]
    private Collection $categories;

    #[ORM\OneToMany(targetEntity: ToolsParameter::class, mappedBy: 'tool')]
    private Collection $properties;

    #[ORM\OneToMany(targetEntity: ToolInstance::class, mappedBy: 'tool', orphanRemoval: true)]
    private Collection $toolInstances;

    public function __construct()
    {
        $this->categories = new ArrayCollection();
        $this->properties = new ArrayCollection();
        $this->toolInstances = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getPrice(): ?string
    {
        return $this->price;
    }

    public function setPrice(string $price): static
    {
        $this->price = $price;

        return $this;
    }

    public function getImgPath(): ?string
    {
        return $this->imgPath;
    }

    public function setImgPath(?string $imgPath): static
    {
        $this->imgPath = $imgPath;

        return $this;
    }

    public function getProducer(): ?Producer
    {
        return $this->producer;
    }

    public function setProducer(?Producer $producer): static
    {
        $this->producer = $producer;

        return $this;
    }

    /**
     * @return Collection<int, Category>
     */
    public function getCategories(): Collection
    {
        return $this->categories;
    }

    public function addCategory(Category $category): static
    {
        if (!$this->categories->contains($category)) {
            $this->categories->add($category);
        }

        return $this;
    }

    public function removeCategory(Category $category): static
    {
        $this->categories->removeElement($category);

        return $this;
    }

    /**
     * @return Collection<int, ToolsParameter>
     */
    public function getProperties(): Collection
    {
        return $this->properties;
    }

    public function addProperty(ToolsParameter $property): static
    {
        if (!$this->properties->contains($property)) {
            $this->properties->add($property);
            $property->setTool($this);
        }

        return $this;
    }

    public function removeProperty(ToolsParameter $property): static
    {
        if ($this->properties->removeElement($property)) {
            // set the owning side to null (unless already changed)
            if ($property->getTool() === $this) {
                $property->setTool(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, ToolInstance>
     */
    public function getToolInstances(): Collection
    {
        return $this->toolInstances;
    }

    public function addToolInstance(ToolInstance $toolInstance): static
    {
        if (!$this->toolInstances->contains($toolInstance)) {
            $this->toolInstances->add($toolInstance);
            $toolInstance->setTool($this);
        }

        return $this;
    }

    public function removeToolInstance(ToolInstance $toolInstance): static
    {
        if ($this->toolInstances->removeElement($toolInstance)) {
            // set the owning side to null (unless already changed)
            if ($toolInstance->getTool() === $this) {
                $toolInstance->setTool(null);
            }
        }

        return $this;
    }
}